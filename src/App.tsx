import { HeroSection } from "./components/HeroSection";
import {
  AboutSection,
  ResultsSection,
  PricingSection,
  ReviewsSection,
  BlogSection,
  ContactsSection,
  FooterSection,
} from "./components/ClinicSections";

export default function App() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ResultsSection />
      <PricingSection />
      <ReviewsSection />
      <BlogSection />
      <ContactsSection />
      <FooterSection />
    </main>
  );
}
