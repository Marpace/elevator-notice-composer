import { useEffect, useState } from "react"
import { outcomes } from "../data"


export default function Notice(props)  {

    const [outcome, setOutcome] = useState(null);

    useEffect(() => {
        setOutcome(() => {
            const outcome = Object.values(props.choices).join("-");
            return outcomes[outcome]
        })
    }, [props.choices])

    const copyText = () => {
        navigator.clipboard.writeText(outcome)
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
            <p className="notice__text">{outcome}</p>
            <span className="notice__warning">
                <img src="/icons/attention.svg"></img>
                <p>Proof read notice before sending</p>
            </span>
            <div className="notice__buttons">
                <button onClick={copyText}>
                    <img src="/icons/copy.svg"></img>
                    copy
                </button>
                <button>
                    <img src="/icons/edit.svg"></img>
                    edit
                </button>
            </div>
        </section>
    )
}