"use client";
import { useState } from "react";
import Indicator from "./components/Indicator";
import Step from "./components/Step";
import "./sass/main.scss";
import Notice from "./components/Notice";

export default function Home() {

  const [currentStep, setCurrentStep] = useState(1);
  const [formCompleted, setFormCompleted] = useState(false);
  const [indicatorStatus, setIndicatorStatus] = useState({
    1: {
      completed: false,
      disabled: false
    },
    2: {
      completed: false,
      disabled: false
    },
    3: {
      completed: false,
      disabled: false
    },
    4: {
      completed: false,
      disabled: false
    },
    5: {
      completed: false,
      disabled: false
    },
  })
  const [choices, setChoices] = useState({
    1: "",
    2: "",
    3: null,
    4: null,
    5: "",
  })

  return (
    <div className="main-div">
      <header>
        <h1 className="header">Discovery I&II</h1>
      </header>
      <main>
        <Indicator 
          currentStep={currentStep}
        />
        <Step 
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formCompleted={formCompleted}
          setFormCompleted={setFormCompleted}
          choices={choices}
          setChoices={setChoices}
        /> 
        <Notice 
          formCompleted={formCompleted}
        />
        <button onClick={() => setCurrentStep(prev => prev - 1)} className={`back-button ${currentStep === 1 ? "hidden" : ""}`}>Back</button>
      </main>
    </div>
  );
}
