import { steps } from "../data";

export default function Indicator(props) {


  return (
      <div className="indicator">
        {steps.map((step, index)  => (
          <div 
            key={index} 
            className={`indicator__step ${step.completed ? "indicator__completed" : ""} ${props.currentStep === step.stepNumber ? "indicator__active" : ""} ${step.disabled ? "indicator__disabled" : ""}`}>
            {step.completed ? <img src="/icons/checkmark.svg"></img> : step.stepNumber}
          </div>
        ))}
      </div>
  )
}