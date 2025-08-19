export const steps = [
    {
        stepNumber: 1,
        question: "Which building is affected?",
        options: [
            "15",
            "19",
            "29",
            "33",
        ]
    },
    {
        stepNumber: 2,
        question: "Type of notice?",
        options: [
            "Initial",
            "Update",
        ]
    },
    {
        stepNumber: 3,
        question: "Are all elevators operational?",
        options: [
            "Yes",
            "No",
        ]
    },
    {
        stepNumber: 4,
        question: "How many elevators are down?",
        options: [
            "1",
            "2",
            "3"
        ]
    },
    //leaving this here in case we need it in the future
    // {
    //     stepNumber: 5,
    //     question: "When will the elevator/s be repaired?",
    //     options: [
    //         "Tomorrow",
    //         "Monday",
    //         "Unknown",
    //     ]
    // },
]

export const generateNotice = (choices) => {

    console.log(choices)

    const greeting = `Dear Residents of ${choices["1"]} Singer Court,\n\n`;
    const signature = `Thank you for your patience and understanding.\n\nSincerely,\nSecurity Team`;
    const update = `An update will be sent to residents as more information becomes available.`
    
    //If only one elevator is down, there is no need to send a notice, unles its building 15 
    if(choices["1"] !== "15" && Object.values(choices).includes("1")) {
        return {
            subject: null,
            text: `There is no need to send a notice at this time. Please go through the questions again, if another elevator goes down.`
        }

    }

    //check if all elevators are down in any building
    else if((choices["1"] === "15" && Object.values(choices).includes("2")) || Object.values(choices).includes("3")) {
        return {
            subject: "ALL ELEVATORS OUT OF SERVICE",
            text: `${greeting} Please be advised that all elevators are currently out of service ${choices["2"] === "Initial" ? ". Our elevator service provider has been contacted for immediate service, and a technician is expected on-site shortly to carry out the necessary repairs." : "until further notice. The elevator technician was unable to complete the repair today."}\n\n ${update} Should you require assistance, please contact the Security Desk at 416-250-1430 or 416-590-0155.\n\n${signature}`
        }
    }

    // first notice informing of elevator/s down
    else if(choices["2"] === "Initial") {
        return {
            subject: `${choices["4"]} ELEVATOR${Number(choices["4"]) > 1 ? "S" : ""} OUT OF SERVICE`,
            text: `${greeting} Please be advised that ${choices["4"]} elevator${choices["1"] === "15" ? " is" : "s are"} currently out of service. Our elevator service provider has been contacted for immediate service, and a technician is expected on-site shortly to carry out the necessary repairs.\n\n We recommend planning ahead, as elevator wait times may be longer than usual during this time. ${update}\n\n${signature}`
        } 
    }

    //all elevators are now operational
    else if(choices["3"] === "Yes") {
        return {
            subject: "ALL ELEVATORS ARE OPERATIONAL",
            text: `${greeting} We are please to inform you that all elevators are now operational\n\n ${signature}`
        } 
    }

    //update and elevator
    else if(choices["3"] === "No") {
        return {
            subject: "UPDATE RE. ELEVATORS",
            text: `${greeting} Please be advised that ${choices["4"]} elevator${choices["1"] === "15" ? " is" : "s are"} currently out of service until further notice. The elevator technician was unable to complete the repair today.\n\n We recommend planning ahead, as elevator wait times may be longer than usual during this time. ${update}\n\n${signature}`
        } 
    }
}
//choices 
// 1 - building 
// 2 - type of notice 
// 3 - all elevators operational? 
// 4 - how many elevators down?
// 5 - repair date