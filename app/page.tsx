import FeaturesSection from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import AboutCompany from "@/components/About";
import NewsletterSignup from "@/components/Newsletter";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <FeaturesSection/>
    <AboutCompany/>
    <NewsletterSignup/>
    <Footer/>
    </>
  );
}
