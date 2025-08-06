"use client";
import { useState } from "react";
import Indicator from "./components/Indicator";
import Step from "./components/Step";
import "./sass/main.scss";
import Notice from "./components/Notice";
import { compile } from "sass";

export default function Home() {


  const [currentStep, setCurrentStep] = useState(1);
  const [formCompleted, setFormCompleted] = useState(true);

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
        /> 
        <Notice 
          formCompleted={formCompleted}
        />
        <button className="back-button">Back</button>
      </main>
    </div>
  );
}
