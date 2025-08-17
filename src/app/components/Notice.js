import { useEffect, useState } from "react"
import { outcomes } from "../data"
import { generateNotice } from "../data";

export default function Notice(props)  {

    const [outcome, setOutcome] = useState(null);

    useEffect(() => {
        setOutcome(generateNotice(props.choices))
    }, [props.choices])

    const handleCopy = () => {
        //replaces the "\n" with "<br>" to keep formatting when copying to BuildingLink
        navigator.clipboard.writeText(outcome.replace(/\n/g, "<br>"))
            .then(() => {
                alert("Text copied to clipboard!");
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert("Failed to copy text. Please try again.");
            });
    }

    return (
        <section className={`notice ${props.formCompleted ? "" : "hidden"}`}>
            {outcome && <p className="notice__text">{outcome}</p>}
            <span className="notice__warning">
                <img src="/attention.svg"></img>
                <p>Proof read notice before sending</p>
            </span>
            <div className="notice__buttons">
                <button onClick={handleCopy}>
                    <img src="/copy.svg"></img>
                    copy
                </button>
            </div>
        </section>
    )
}