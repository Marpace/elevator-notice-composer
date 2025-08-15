export const steps = [
    {
        stepNumber: 1,
        question: "Which building is affected?",
        options: [
            "15",
            "19",
            "29",
            "33",
        ],
        completed: false,
        disabled: false
    },
    {
        stepNumber: 2,
        question: "Type of notice?",
        options: [
            "Initial",
            "Update",
        ],
        completed: false,
        disabled: false
    },
    {
        stepNumber: 3,
        question: "Are all elevators operational?",
        options: [
            "Yes",
            "No",
        ],
        completed: false,
        disabled: false
    },
    {
        stepNumber: 4,
        question: "How many elevators are down?",
        options: [
            "1",
            "2",
            "3"
        ],
        completed: false,
        disabled: false
    },
    //leaving this here in case we need it in the future
    // {
    //     stepNumber: 5,
    //     question: "When will the elevator/s be repaired?",
    //     options: [
    //         "Tomorrow",
    //         "Monday",
    //         "Unknown",
    //     ],
    //     completed: false,
    //     disabled: false
    // },
]

// export const outcomes = {
//     "15-Initial-1": "Dear Residents of 15 Singer Court,\n\n Please be advised that one elevator is currently out of service. Our elevator service provider has been contacted for immediate service, and a technician is expected on-site shortly to carry out the necessary repairs.\n\n We recommend planning ahead, as elevator wait times may be longer than usual during this time. We will share further updates as soon as more information becomes available.\n\nThank you for your continued patience and understanding.\n\nSincerely,\nSecurity Team",
//     "19-Initial-2":
//     "19-Initial-3":
//     "29-Initial-2":
//     "29-Initial-3":
//     "33-Initial-2":
//     "33-Initial-3":
    
// }


export const generateNotice = (answers) => {

    const greeting = `Dear Residents of ${answers[0]} Singer Court,\n\n`;
    const signature = `Thank you for your patience and understanding.\n\nSincerely,\nSecurity Team`
    
    //If only one elevator is down, there is no need to send a notice, unles its building 15 
    if(answers[0] !== "15" && answers.includes("1")) {
        return `There is no need to send a notice at this time. Please go through the qeustions again, if another elevator goes down. Thank you`
    }

    //check if all elevators are down in any building
    else if((answers[0] === "15" && answers.includes("2")) || answers.includes("3")) {
        return `${greeting} Please be advised that all elevators are currently out of service. Our elevator service provider has been contacted for immediate service, and a technician is expected on-site shortly to carry out the necessary repairs.\n\n We will share further updates as soon as more information becomes available. Should you require assistance, please contact the Security Desk at 416-250-1430 or 416-590-0155.\n\n${signature}`
    }

    // first notice informing of elevator/s down
    else if(answers[1] === "Initial") {
        return `${greeting} Please be advised that ${answers[2]} elevator${answers[0] === "15" ? " is" : "s are"} currently out of service. Our elevator service provider has been contacted for immediate service, and a technician is expected on-site shortly to carry out the necessary repairs.\n\n We recommend planning ahead, as elevator wait times may be longer than usual during this time. We will share further updates as soon as more information becomes available.\n\n${signature}`
    }

    //all elevators are now operational
    else if(answers[2] === "Yes") {
        return `${greeting} We are please to inform you that all elevators are now operational\n\n ${signature}`
    }

    //update and elevator
    else if(answers[2] === "No") {
        return `${greeting} Please be advised that ${answers[2]} elevator${answers[0] === "15" ? " is" : "s are"} currently out of service. Our elevator service provider has been contacted for immediate service, and a technician is expected on-site shortly to carry out the necessary repairs.\n\n We recommend planning ahead, as elevator wait times may be longer than usual during this time. We will share further updates as soon as more information becomes available.\n\n${signature}`
    }
}
//choices 
// building 
// type of notice 
// all elevators operational? 
// how many elevators down?
// repair date