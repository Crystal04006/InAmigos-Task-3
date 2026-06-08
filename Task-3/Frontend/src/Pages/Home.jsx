import { useEffect } from "react";
import Navigation from "../Components/Site/Navigation";
import Hero from "../Components/Site/Hero";
import Ticker from "../Components/Site/Ticker";
import Roasts from "../Components/Site/Roasts";
import Story from "../Components/Site/Story";
import Subscription from "../Components/Site/Subscription";
import Journal from "../Components/Site/Journal";
import Testimonials from "../Components/Site/Testimonials";
import Locations from "../Components/Site/Location";
import ContactNewsletter from "../Components/Site/ContactNewsLetter";
import Footer from "../Components/Site/Footer";
export default function Home() {
  useEffect(() => {
    document.title = "North & Pine — Small-batch Coffee, Slow-roasted.";
  }, []);

  return (
    <main data-testid="home-page" className="relative overflow-hidden bg-background text-foreground">
      <Navigation />
      <Hero />
      <Ticker />
      <Roasts />
      <Story />
      <Subscription />
      <Journal />
      <Testimonials />
      <Locations />
      <ContactNewsletter />
      <Footer />
    </main>
  );
}