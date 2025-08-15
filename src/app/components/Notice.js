import { useEffect, useState } from "react"
import { outcomes } from "../data"
import { generateNotice } from "../data";

export default function Notice(props)  {

    const [outcome, setOutcome] = useState(null);

    // useEffect(() => {
    //     setOutcome(() => {
    //         const outcome = Object.values(props.choices).join("-");
    //         return outcomes[outcome]
    //     })
    // }, [props.choices])

    useEffect(() => {
        setOutcome(generateNotice(props.choices))
    }, [props.choices])

    const handleCopy = () => {
        navigator.clipboard.writeText(outcome.replace(/\n/g, "<br>"))
            .then(() => {
                alert("Text copied to clipboard!");
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert("Failed to copy text. Please try again.");
            });
    }

    // const handleCopy = async () => {
    //     const htmlContent = outcome.replace(/\n/g, "<br>");

    //     try {
    //         await navigator.clipboard.write([
    //         new ClipboardItem({
    //             'text/html': new Blob([htmlContent], { type: 'text/html' }),
    //             'text/plain': new Blob([rawText], { type: 'text/plain' }),
    //         }),
    //         ]);
    //         alert('Copied with formatting!');
    //     } catch (err) {
    //         console.error('Failed to copy: ', err);
    //     }
    // };

    return (
        <section className={`notice ${props.formCompleted ? "" : "hidden"}`}>
            <p className="notice__text">{outcome}</p>
            <span className="notice__warning">
                <img src="/icons/attention.svg"></img>
                <p>Proof read notice before sending</p>
            </span>
            <div className="notice__buttons">
                <button onClick={handleCopy}>
                    <img src="/icons/copy.svg"></img>
                    copy
                </button>
                {/* <button>
                    <img src="/icons/edit.svg"></img>
                    edit
                </button> */}
            </div>
        </section>
    )
}