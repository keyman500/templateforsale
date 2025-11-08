"use client";
import { useState } from "react";
import FaqBG from "./Shadows/FaqBG";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What exactly is Telezen?",
    answer:
      "Telezen is your AI teammate that handles tasks, workflows, and client communication, all with a hint of personality. Think of it as your assistant who’s efficient and entertaining.",
  },
  {
    question: "Can I try Telezen for free?",
    answer:
      "Yes! Telezen offers a free trial so you can experience its capabilities before committing to a plan.",
  },
  {
    question: "How many AI agents can I create?",
    answer:
      "You can create multiple AI agents based on your subscription plan. Each agent can handle different tasks or departments.",
  },
  {
    question: "Does Telezen integrate with my tools?",
    answer:
      "Absolutely. Telezen integrates seamlessly with your favorite tools, making your workflows even smoother.",
  },
];

const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden pb-10 md:pb-0">
      {/* Background SVG */}
      <FaqBG />

      <div className="relative z-10 max-w-[1230px] px-4 w-full mx-auto flex gap-10 flex-col lg:flex-row justify-between">
        <div className="lg:max-w-[460px] w-full text-center lg:text-start">
          <h1 className="f-eightiescomeback mb-[15px] tracking-[-0.01em] text-2xl sm:text-[38px] leading-[30px] sm:leading-[43px]">
            Frequently Asked Questions
          </h1>

          <p className="text-[#7D7D7D] text-[14px] md:text-[16px] leading-5 sm:leading-[23px] tracking-[-0.01em] f-neue-regular">
            Answers to common questions about Telezen.
          </p>
        </div>

        <div className="space-y-[13px] max-w-[684px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl md:rounded-[20px] bg-white transition-all duration-300 ${
                openIndex === index
                  ? "px-4 sm:px-5 pt-4 sm:pt-5 pb-4.5 sm:pb-[22px]"
                  : "px-4 sm:px-5 py-3.5"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="f-neue-medium text-[16px] sm:text-[20px] tracking-[-0.5px]">
                  {faq.question}
                </span>

                <div
                  className={`sm:w-11 sm:h-11 w-8 h-8 rounded-full flex items-center justify-center border ${
                    openIndex === index
                      ? "border-[#F0F6FF] bg-[#F0F6FF]"
                      : "bg-transparent border-[#F0F0F0]"
                  }`}
                >
                  <svg
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform transition-transform duration-500   ${
                      openIndex === index
                        ? "rotate-180 text-blue-500"
                        : "rotate-0 text-gray-400"
                    }`}
                  >
                    <path
                      d="M6.75 0.749999L6.75 16.75M6.75 16.75L0.749999 10.75M6.75 16.75L12.75 10.75"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-3 sm:mt-[15px] text-[#7D7D7D] text-[14px] sm:text-[18px] leading-5 sm:leading-[26px] f-neue-regular tracking-[-0.5px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
