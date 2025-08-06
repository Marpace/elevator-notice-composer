"use client";
import {useState} from "react";
import { stepQuestions } from "../data";

export default function Indicator(props) {


  return (
      <div className="indicator">
        {stepQuestions.map((step, index)  => (
          <div 
            key={index} 
            className={`indicator__step ${step.completed ? "indicator__completed" : ""} ${props.currentStep === step.stepNumber ? "indicator__active" : ""}`}>
            {step.completed ? <img src="/icons/checkmark.svg"></img> : step.stepNumber}
          </div>
        ))}
      </div>
  )
}