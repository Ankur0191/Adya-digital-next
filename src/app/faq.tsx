"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div className="bg-[#f6f5f4] w-full rounded-3xl py-10 px-4 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-5xl font-bold text-black mb-2">
          Have Questions?
        </h2>
        <h3 className="text-xl md:text-4xl font-semibold text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent mb-10">
          Get Answers.
        </h3>

        {/* FAQ Section */}
        <Accordion type="single" collapsible className="text-left space-y-3">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is the benefit of taking an integrated execution plan instead of individual services?
            </AccordionTrigger>
            <AccordionContent>
              Imagine our integrated plan as a thali meal for your business. Why pick just one dish when you can enjoy the full spread? From tech and research to marketing—we serve everything together like an IPL team, not just one player.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              I am a small business owner, how will Adya Digital help me?
            </AccordionTrigger>
            <AccordionContent>
              For small businesses, we're the jugaad experts—mixing innovation with experience. We'll transform your 'small' into 'big' like a Bollywood-style makeover!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              I just have an idea, how can you help me?
            </AccordionTrigger>
            <AccordionContent>
              We’ll be your business’s guiding star—validating your idea, researching the market, ensuring feasibility, and helping you brand and launch smoothly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              How can Adya Digital provide all services under one roof?
            </AccordionTrigger>
            <AccordionContent>
              We have an experienced in-house team, supported by domain experts and partner firms in legal, finance, and tech. It’s like having an entire startup ecosystem ready to go.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              What should I do if I want to discuss my project?
            </AccordionTrigger>
            <AccordionContent>
              Just reach out like calling your chaiwala! WhatsApp us at <strong>+91-7715 596969</strong> or email us at <strong>info@adyadigital.com</strong>.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              How does problem-solving work at Adya Digital?
            </AccordionTrigger>
            <AccordionContent>
              Like detectives, we connect, understand, research, analyze, and strategize to deliver tailored, impactful solutions to your business challenges.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Why Adya Digital */}
        <div className="mt-16 text-left">
          <h4 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Why Adya Digital?
          </h4>
          <div className="space-y-4 text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            <p>
              <strong>Innovation & Creativity:</strong> Winds of change come; some build walls, others windmills. We thrive on creative problem-solving and future-ready ideas.
            </p>
            <p>
              <strong>Speed & Efficiency:</strong> We know speed matters. Our execution is lean, fast, and always aligned with your goals.
            </p>
            <p>
              <strong>The X-Factor:</strong> We help you identify what makes your business unique—and make it your superpower in the market.
            </p>
            <p>
              <strong>End-to-End Integration:</strong> We ensure no gaps in execution by building solid frameworks that tie everything—from backend to marketing—together.
            </p>
            <p>
              We believe in "Go for Greatness." Business is built with sweat, courage, and heart. At Adya Digital, we bring our best—every single time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
