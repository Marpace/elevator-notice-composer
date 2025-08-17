import { steps } from "../data"


export default function Step(props) {
  
  const handleNextStep = (e) => {

    const choice = e.target.id;

    // If it's the initial notice, skip step 3 
    if(choice === "Initial") {
      props.setCurrentStep(4);
      props.setIndicatorStatus(prev => {
        const obj = {...prev};
        obj[3].disabled = true
        obj[2].completed = true
        return obj;
      })
    }

    //If on step 4 and it's the initial notice, skip step 5 and go straight to the notice
    else if(props.currentStep === 4 && props.choices["1"] === "Initial") {
      props.setIndicatorStatus(prev => {
        const obj = {...prev};
        obj[props.currentStep].completed = true;
        return obj;
      })
      props.setFormCompleted(true);
      props.setCurrentStep(null);
    }
    
    // If all elevators are operational go straight to notice
    else if(choice === "Yes") {
      props.setIndicatorStatus(prev => {
        const obj = {...prev};
        obj[props.currentStep].completed = true;
        obj[4].disabled = true;
        return obj;
      })
      props.setFormCompleted(true); 
      props.setCurrentStep(null);
    }

    // If not at the last step, go to the next step 
    else if(props.currentStep < steps.length) {
      props.setIndicatorStatus(prev => {
        const obj = {...prev};
        obj[props.currentStep].completed = true
        return obj;
      })
      props.setCurrentStep(prev => prev + 1) 
    }

    //if all steps are completed, go to the notice
    else {
      props.setIndicatorStatus(prev => {
        const obj = {...prev};
        obj[props.currentStep].completed = true
        return obj;
      })
      props.setCurrentStep(null);
      props.setFormCompleted(true);
    }
    
    //set the selected choice to the choices object
    props.setChoices(prev => {
      const obj = {...prev};
      obj[props.currentStep.toString()] = choice
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