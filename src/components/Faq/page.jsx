import React, { useState } from "react";
import Emailpage from "../emailpage/page";

const faqs = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial — all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    question: "  How much does Netflix cost?",
    answer:
      "  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,500 to ₦8,500 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      " Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see",
  },
];

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className=" overflow-hidden bg-neutral-800/60">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-neutral-700/60"
      >
        <span className="text-white text-lg font-medium">{question}</span>
        <span className="relative inline-block w-10 h-10">
          <span
            className={`absolute left-1/2 top-0 bottom-0 w-[2px] bg-white -translate-x-1/2 transition-transform duration-200 ${
              isOpen ? "rotate-40" : "rotate-0"
            }`}
          />
          <span
            className={`absolute top-1/2 left-0 right-0 h-[2px] bg-white -translate-y-1/2 transition-transform duration-200 ${
              isOpen ? "rotate-40" : "rotate-0"
            }`}
          />
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-neutral-200 leading-relaxed text-xl font-bold">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

const Faqpage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <section className=" z-20 flex flex-col bg-black w-full">
        <div className="mx-4 md:mx-14 lg:mx-32 my-16">
          <h2 className="text-white font-bold text-3xl">
            Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-3">
            {faqs.map((item, idx) => (
              <AccordionItem
                key={idx}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
          <div className="flex justify-center text-center items-center">
            <Emailpage />
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqpage;
