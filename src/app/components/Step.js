import { stepQuestions } from "../data"


export default function Step(props) {
  
  const handleNextStep = (e) => {
    //check if form is at the last step, otherwise increase step by one
    if(props.currentStep < stepQuestions.length) props.setCurrentStep(prev => prev + 1)
    else props.setFormCompleted(true);
    
    //set the selected choice to the choices object
    props.setChoices(prev => {
      const obj = {...prev};
      console.log(obj)
      obj[props.currentStep] = e.target.id;
      return obj;
    })
  }
    
  return (
    <section className={`steps-container ${props.formCompleted ? "hidden" : ""}`}>
      {stepQuestions.map((step, index) => (
        <div className={`step ${props.currentStep === step.stepNumber ? "" : "hidden"}`} key={index}>
          <p className="step__question">{step.question}</p>
          <div className="step__options">
            {step.options.map((option, optionIndex) => (
              <div 
                id={option}
                onClick={(e) => handleNextStep(e)}
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