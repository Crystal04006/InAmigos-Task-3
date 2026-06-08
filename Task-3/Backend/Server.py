from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone

# ... the rest of your server code follows below


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="North & Pine Coffee API")
api_router = APIRouter(prefix="/api")


# -------- Models --------
class Product(BaseModel):
    id: str
    name: str
    origin: str
    roast: str
    notes: List[str]
    price_usd: float
    weight_g: int
    img: str


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(min_length=1, max_length=4000)


class NewsletterSub(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class NewsletterCreate(BaseModel):
    email: EmailStr


# Curated catalogue
PRODUCTS: List[Product] = [
    Product(
        id="ember-house",
        name="Ember House Blend",
        origin="Brazil · Colombia",
        roast="Medium",
        notes=["dark chocolate", "toasted almond", "brown sugar"],
        price_usd=18.0,
        weight_g=340,
        img="https://images.unsplash.com/photo-1559525839-d9acfd02363a?auto=format&fit=crop&w=900&q=80",
    ),
    Product(
        id="moonrise-ethiopia",
        name="Moonrise Yirgacheffe",
        origin="Ethiopia · Yirgacheffe",
        roast="Light",
        notes=["jasmine", "stone fruit", "honey"],
        price_usd=22.0,
        weight_g=250,
        img="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=900&q=80",
    ),
    Product(
        id="pine-river-decaf",
        name="Pine River Decaf",
        origin="Sumatra · Mandheling",
        roast="Medium-Dark",
        notes=["cocoa nibs", "cedar", "molasses"],
        price_usd=19.0,
        weight_g=340,
        img="https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&w=900&q=80",
    ),
    Product(
        id="north-star-espresso",
        name="North Star Espresso",
        origin="Guatemala · Costa Rica",
        roast="Dark",
        notes=["bittersweet cocoa", "dried fig", "burnt sugar"],
        price_usd=20.0,
        weight_g=340,
        img="https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=900&q=80",
    ),
]


# -------- Routes --------
@api_router.get("/" )
async def root():
    return {"message": "North & Pine Coffee API is live", "status": "ok"}


@api_router.get("/products", response_model=List[Product])
async def list_products():
    return PRODUCTS


@api_router.post("/contact", response_model=ContactMessage, status_code=201)
async def submit_contact(payload: ContactCreate):
    msg = ContactMessage(**payload.model_dump())
    doc = msg.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_messages.insert_one(doc)
    return msg


@api_router.post("/newsletter", response_model=NewsletterSub, status_code=201)
async def subscribe_newsletter(payload: NewsletterCreate):
    existing = await db.newsletter_subs.find_one({"email": payload.email})
    if existing:
        raise HTTPException(status_code=409, detail="This email is already on the list.")
    sub = NewsletterSub(email=payload.email)
    doc = sub.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.newsletter_subs.insert_one(doc)
    return sub


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
