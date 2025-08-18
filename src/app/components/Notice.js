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
                props.setTextCopied(true);
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
                <img src="/elevator-notice-composer/attention.svg"></img>
                <p>PROOF READ NOTICE BEFORE SENDING!</p>
            </span>
            <span className="notice__link">
                <img src="/elevator-notice-composer/info.svg"></img>
                <p>How to send email via BuildingLink</p>
            </span>
            <div className="notice__buttons">
                <button onClick={handleCopy} className={props.textCopied ? "copied" : ""}>
                    <img src={`/elevator-notice-composer/${props.textCopied ? "copy-green" : "copy"}.svg`}></img>
                    {props.textCopied ? "copied" : "copy"}
                </button>
            </div>
        </section>
    )
}