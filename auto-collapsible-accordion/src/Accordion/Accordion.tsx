import "./Accordion.css";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";

import Loader from "../Loader/Loader";

type Props = {
  ques: string;
  ans: string;
  currentActiveIndex: number;
  idx: number;
  setCurrentActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  nextIdx: number;
  delayinMs: number;
};

const Accordion = ({
  ques,
  ans,
  currentActiveIndex,
  idx,
  setCurrentActiveIndex,
  nextIdx,
  delayinMs,
}: Props) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [width, setWidth] = useState((1000 * 100) / delayinMs);
  const timerRef = useRef<NodeJS.Timer | null>(null);
  const intervalRef = useRef<number | null>(null);
  const quesRef = useRef<HTMLDivElement>(null);

  const increase = (1000 * 100) / delayinMs;

  useEffect(() => {
    if (currentActiveIndex !== idx && timerRef.current) {
      clearTimeout(timerRef.current);
      setShowAnswer(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        setWidth((1000 * 100) / delayinMs);
      }
    }

    if (currentActiveIndex === idx) {
      setShowAnswer(true);

      intervalRef.current = window.setInterval(function () {
        setWidth((prev) => prev + increase);
      }, 1000);

      timerRef.current = setTimeout(() => {
        setShowAnswer(false);
        setCurrentActiveIndex(nextIdx);
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [
    currentActiveIndex,
    delayinMs,
    idx,
    increase,
    nextIdx,
    setCurrentActiveIndex,
  ]);

  const handleClick = () => {
    if (currentActiveIndex === idx) return;

    setCurrentActiveIndex(idx);
  };
  return (
    <div>
      <div ref={quesRef} onClick={handleClick} className="question-container">
        <p
          className={`question ${showAnswer ? " active-text" : " hover-text"}`}
        >
          {ques}
        </p>
        <p>
          {" "}
          {showAnswer ? (
            <BsChevronUp className="chevron-open" size={50} />
          ) : (
            <BsChevronDown className="chevron-close" size={50} />
          )}
        </p>
      </div>
      {showAnswer && (
        <>
          <Loader width={width} />
          <div className="answer active-text">{ans}</div>
        </>
      )}
    </div>
  );
};

export default Accordion;
