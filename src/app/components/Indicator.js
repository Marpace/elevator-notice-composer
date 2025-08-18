import { steps } from "../data";

export default function Indicator(props) {

  return (
      <div className="indicator">
        {steps.map((step, index)  => (
          <div 
            key={index} 
            className={`indicator__step ${props.indicatorStatus[step.stepNumber].completed ? "indicator__completed" : ""} ${props.currentStep === step.stepNumber ? "indicator__active" : ""} ${props.indicatorStatus[step.stepNumber].disabled ? "indicator__disabled" : ""}`}>
            {props.indicatorStatus[step.stepNumber].completed ? <img src="/elevator-notice-composer/checkmark.svg"></img> : step.stepNumber}
          </div>
        ))}
      </div>
  )
}