import FAQ from "./components/FAQ";
import FeaturesGrid from "./components/FeaturesGrid";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import WorkGrid from "./components/WorkGrid";
import About from "./components/About";
import ContactCTA from "./components/ContactCTA";
import { caseStudies, faqs, features, footerNavigation, testimonials, } from "./contentSections";
import SecurityHighlight from "./ExampleHighlightedFeature";
export default function LandingPage() {
    return (<div className="bg-background text-foreground">
      <main className="isolate">
        <Hero />
        <FeaturesGrid features={features}/>
        <WorkGrid caseStudies={caseStudies}/>
        <SecurityHighlight />
        <Testimonials testimonials={testimonials}/>
        <About />
        <FAQ faqs={faqs}/>
        <ContactCTA />
      </main>
      <Footer footerNavigation={footerNavigation}/>
    </div>);
}
//# sourceMappingURL=LandingPage.jsx.map