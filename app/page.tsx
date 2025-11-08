import Header from "./components/Header";
import WorkflowProcess from "./components/WorkflowProcess";
import Pricing from "./components/Pricing";
import FAQAccordion from "./components/Faqs";
import JoinRevolution from "./components/JoinRevolution";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PowerFeatures from "./components/PowerFeatures";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PowerFeatures />
      <WorkflowProcess />
      <Pricing />
      <Testimonials />
      <FAQAccordion />
      <JoinRevolution />
      <Footer />
    </>
  );
}
