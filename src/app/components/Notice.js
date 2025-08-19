import { useEffect, useState } from "react"
import { outcomes } from "../data"
import { generateNotice } from "../data";

export default function Notice(props)  {

    const [notice, setNotice] = useState(null);

    useEffect(() => {
        setNotice(generateNotice(props.choices))
    }, [props.choices])

    const handleCopySubject = () => {
        //replaces the "\n" with "<br>" to keep formatting when copying to BuildingLink
        navigator.clipboard.writeText(notice.subject)
            .then(() => {
                props.setSubjectCopied(true);
                props.setTextCopied(false);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert("Failed to copy text. Please try again.");
            });
    }

    const handleCopyText = () => {
        //replaces the "\n" with "<br>" to keep formatting when copying to BuildingLink
        navigator.clipboard.writeText(notice.text.replace(/\n/g, "<br>"))
            .then(() => {
                props.setTextCopied(true);
                props.setSubjectCopied(false);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert("Failed to copy text. Please try again.");
            });
    }

    return (
        <section className={`notice ${props.formCompleted ? "" : "hidden"}`}>
            {notice && <p className="notice__subject">{notice.subject}</p>}
            {notice && <p className="notice__text">{notice.text}</p>}
            <span className="notice__warning">
                <img src="/elevator-notice-composer/attention.svg"></img>
                <p>PROOF READ NOTICE BEFORE SENDING!</p>
            </span>
            {/* <span className="notice__link">
                <img src="/elevator-notice-composer/info.svg"></img>
                <p>How to send email via BuildingLink</p>
            </span> */}
            <div className="notice__buttons">
                <button onClick={handleCopySubject} className={props.subjectCopied ? "copied" : ""}>
                    <img src={`/elevator-notice-composer/${props.subjectCopied ? "copy-green" : "copy"}.svg`}></img>
                    {props.subjectCopied ? "copied subject" : "copy subject"}
                </button>
                <button onClick={handleCopyText} className={props.textCopied ? "copied" : ""}>
                    <img src={`/elevator-notice-composer/${props.textCopied ? "copy-green" : "copy"}.svg`}></img>
                    {props.textCopied ? "copied text" : "copy text"}
                </button>
            </div>
        </section>
    )
}