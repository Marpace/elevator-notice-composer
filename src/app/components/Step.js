import { steps } from "../data"


export default function Step(props) {
  
  const handleNextStep = (e) => {

    const choice = e.target.id;
    console.log(props.choices[2])

    if(props.currentStep === 2 && choice === "Initial notice") {
      props.setCurrentStep(4);
      
    }
    else if(props.currentStep === 4 && props.choices[2] === "Initial notice") props.setFormCompleted(true);
    else if(props.currentStep === 3 && choice === "Yes") props.setFormCompleted(true); 
    else if(props.currentStep < steps.length) props.setCurrentStep(prev => prev + 1)
    else props.setFormCompleted(true);
    
    //set the selected choice to the choices object
    props.setChoices(prev => {
      const obj = {...prev};
      console.log(obj)
      obj[props.currentStep] = choice;
      return obj;
    })
  }
    
  return (
    <section className={`steps-container ${props.formCompleted ? "hidden" : ""}`}>
      {steps.map((step, index) => (
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