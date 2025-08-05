"use client";
import { useState } from "react";
import Indicator from "./components/Indicator";
import Step from "./components/Step";
import "./sass/main.scss";

export default function Home() {


  const [currentStep, setCurrentStep] = useState(2);

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
        /> 
      </main>
    </div>
  );
}
