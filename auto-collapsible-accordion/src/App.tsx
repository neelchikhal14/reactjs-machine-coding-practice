import "./App.css";

import { DataType, data } from "./data/accordionData";
import React, { useState } from "react";

import Accordion from "./Accordion/Accordion";

const App = () => {
  const [accordionData, setAccordionData] = useState<DataType | []>(data);
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
  const accDataLen = accordionData.length;
  return (
    <div className="parent-container">
      <h1 className="title">Auto Collapsible Accordion</h1>
      {accordionData &&
        accordionData.length > 0 &&
        accordionData.map((acc, idx) => (
          <div key={acc.id}>
            <Accordion
              currentActiveIndex={currentActiveIndex}
              idx={idx}
              ques={acc.question}
              ans={acc.answer}
              setCurrentActiveIndex={setCurrentActiveIndex}
              nextIdx={(idx + 1) % accDataLen}
              delayinMs={4000}
            />
          </div>
        ))}
    </div>
  );
};

export default App;
