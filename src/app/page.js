"use client";
import { useState } from "react";
import Indicator from "./components/Indicator";
import Step from "./components/Step";
import "./sass/main.scss";
import Notice from "./components/Notice";
import { steps } from "./data";

export default function Home() {

  const [currentStep, setCurrentStep] = useState(1);
  const [formCompleted, setFormCompleted] = useState(false);
  const [indicatorStatus, setIndicatorStatus] = useState(() => {
    const obj = {};
    steps.forEach(step => {
      obj[step.stepNumber] = {completed: false, disabled: false}
    })
    return obj;
  })
  const [choices, setChoices] = useState(() => {
    const obj = {};
    steps.forEach(step => {
      obj[step.stepNumber] = null;
    })
    return obj;
  })

  const resetSteps = () => {
    setCurrentStep(1);
    setChoices({});
    setFormCompleted(false);
    setIndicatorStatus(prev => {
      const obj = {};
      steps.forEach(step => {
        obj[step.stepNumber] = {completed: false, disabled: false}
      })
      return obj;
    })
  }


  return (
    <div className="main-div">
      <header>
        <h1 className="header">Discovery I&II</h1>
      </header>
      <main>
        <Indicator 
          currentStep={currentStep}
          indicatorStatus={indicatorStatus}
        />
        <Step 
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formCompleted={formCompleted}
          setFormCompleted={setFormCompleted}
          choices={choices}
          setChoices={setChoices}
          setIndicatorStatus={setIndicatorStatus}
        /> 
        <Notice 
          formCompleted={formCompleted}
          choices={choices}
        />
        {/* <button onClick={() => setCurrentStep(prev => prev - 1)} className={`back-button ${currentStep === 1 ? "hidden" : ""}`}>Back</button> */}
        <button onClick={resetSteps} className={`back-button ${currentStep === 1 ? "hidden" : ""}`}>Reset</button>
      </main>
    </div>
  );
}
