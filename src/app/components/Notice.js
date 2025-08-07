export default function Notice(props)  {
    return (
        <section className={`notice ${props.formCompleted ? "" : "hidden"}`}>
            <p className="notice__text">Dear Residents of 29 Singer Court,<br></br><br></br>
                Please be advised that two elevators are currently out of service. Our elevator service provider has been contacted, and a technician is expected on-site shortly to carry out the necessary repairs.<br></br><br></br>
                We recommend planning ahead, as elevator wait times may be longer than usual during this time. We will share further updates as soon as more information becomes available.<br></br><br></br>
                Thank you for your continued patience and understanding.<br></br><br></br>
                Sincerely,<br></br>
                Security Team
            </p>
            <span className="notice__warning">
                <img src="/icons/attention.svg"></img>
                <p>Proof read notice before sending</p>
            </span>
            <div className="notice__buttons">
                <button>
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