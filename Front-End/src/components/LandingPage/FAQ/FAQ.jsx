import React, { useState } from "react";
import FAQHeader from "./FAQHeader";
import FAQChat from "./FAQChat";
import FAQQuestions from "./FAQQuestions";
import faqData from '../../../data/FAQData';

const FAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 bg-white">
      <FAQHeader />

      <div className="mt-16 max-w-4xl mx-auto">
        <FAQChat
          question={faqData[active].q}
          answer={faqData[active].a}
        />
        <FAQQuestions
          data={faqData}
          active={active}
          setActive={setActive}
        />
      </div>
    </section>
  );
};

export default FAQ;
