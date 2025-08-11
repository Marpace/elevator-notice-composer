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
    {
        stepNumber: 5,
        question: "When will the elevator/s be repaired?",
        options: [
            "Tomorrow",
            "Monday",
            "Unknown",
        ],
        completed: false,
        disabled: false
    },
]

export const outcomes = {
    "15-Initial-1": "Dear Residents of 15 Singer Court,\n\n Please be advised that one elevator is currently out of service. Our elevator service provider has been contacted for immediate service, and a technician is expected on-site shortly to carry out the necessary repairs.\n\n We recommend planning ahead, as elevator wait times may be longer than usual during this time. We will share further updates as soon as more information becomes available.\n\nThank you for your continued patience and understanding.\n\nSincerely,\nSecurity Team"
}

//choices 
// building 
// type of notice 
// all elevators operational? 
// how many elevators down?
// repair date