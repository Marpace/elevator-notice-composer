import { stepQuestions } from "../data"

export default function Step(props) {
    
  console.log(stepQuestions[0].options)
    
  return (
    <section className={`steps-container ${props.formCompleted ? "hidden" : ""}`}>
      {stepQuestions.map((step, index) => (
        <div className={`step ${props.currentStep === step.stepNumber ? "" : "hidden"}`} key={index}>
          <p className="step__question">{step.question}</p>
          <div className="step__options">
            {step.options.map((option, optionIndex) => (
              <div 
                onClick={() => props.setCurrentStep(step.stepNumber + 1)}
                className="step__options-option" 
                key={optionIndex}>
                  {option}
              </div>
            ))}
          </div>
        </div>
      ))}
      </section>  
  )
}