import { useState, useRef } from "react"

export default function Tutorial() {

  const [showInstructions, setShowInstructions] = useState(false);


  const targetRef = useRef(null);

  const handleToggle = () => {
    setShowInstructions(prev => prev ? false : true)
    setTimeout(() => {
      targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };




  return (
    <section className="tutorial">
      <span onClick={handleToggle} className="tutorial__toggle">
        <img src="/elevator-notice-composer/info.svg"></img>
        <p>How to send email from BuildingLink</p>
      </span>
      <div ref={targetRef} className={`tutorial__instructions ${showInstructions ? "" : "hidden"}`}>
        <h3>Follow these steps to send an email from BuildingLink</h3>
        <p>1. click on "Communicate" from the menu on the left hand side, then click on "Send email"</p>
        <img src="/elevator-notice-composer/BuildingLink/bl-1.png"></img>
        <p>2. Click on "Compose"</p>
        <img src="/elevator-notice-composer/BuildingLink/bl-2.png"></img>
        <p>3. Click on "By location"</p>
        <img src="/elevator-notice-composer/BuildingLink/bl-3.png"></img>
        <p>4. Select the building you want to notify and click on "Ok"</p>
        <img src="/elevator-notice-composer/BuildingLink/bl-4.png"></img>
        <p>5. Click on "Type/Group"</p>
        <img src="/elevator-notice-composer/BuildingLink/bl-5.png"></img>
        <p>6. Click on "Employees", then "Select all Employees", then click on "Ok"</p>
        <img src="/elevator-notice-composer/BuildingLink/bl-6.png"></img>
        <p>7. Paste the subject from the notice in the subject field</p>
        <img src="/elevator-notice-composer/BuildingLink/bl-7.png"></img>
        <p>8. Paste the notice in the body of the email and click on "Send"</p>
        <img src="/elevator-notice-composer/BuildingLink/bl-8.png"></img>
      </div>
    </section>
  )
}