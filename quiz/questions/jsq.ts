const jsquestions: {id:number, question:string, choices:string[], correctAnswer:string}[] = [
    {
        "id": 1,
        "question": "What is a closure in JavaScript?",
        "choices": ["Function declared inside another function", "Variable that cannot be changed", "Object property"],
        "correctAnswer": "Function declared inside another function"
    },
    {
        "id": 2,
        "question": "What is 'NaN' in JavaScript?",
        "choices": ["Not a Name", "Null and Negative", "Not a Number"],
        "correctAnswer": "Not a Number"
    },
    {
        "id": 3,
        "question": "What does '=== 'operator do in JavaScript?",
        "choices": ["Assigns value", "Checks value and type", "Compares only value"],
        "correctAnswer": "Checks value and type"
    },
    {
        "id": 4,
        "question": "What is the 'prototype' property in JavaScript?",
        "choices": ["Object's parent", "Function's prototype object", "Object's child"],
        "correctAnswer": "Function's prototype object"
    },
    {
        "id": 5,
        "question": "What is an 'IIFE' in JavaScript?",
        "choices": ["Immediately Invoked Function Expression", "Intrinsic Interface Function Element", "Internal Inline File Execution"],
        "correctAnswer": "Immediately Invoked Function Expression"
    },
    {
        "id": 6,
        "question": "What is the 'this' keyword in JavaScript?",
        "choices": ["Refers to current object", "Refers to global object", "Refers to parent object"],
        "correctAnswer": "Refers to current object"
    },
    {
        "id": 7,
        "question": "What is the 'bind()' method used for in JavaScript?",
        "choices": ["To concatenate strings", "To merge arrays", "To set 'this' value"],
        "correctAnswer": "To set 'this' value"
    },
    {
        "id": 8,
        "question": "What does 'null' represent in JavaScript?",
        "choices": ["Empty value", "Undefined value", "Object"],
        "correctAnswer": "Empty value"
    },
    {
        "id": 9,
        "question": "What is an 'event delegation' in JavaScript?",
        "choices": ["Binding events to specific elements", "Delegating events to parent elements", "Using events to trigger actions"],
        "correctAnswer": "Delegating events to parent elements"
    },
    {
        "id": 10,
        "question": "What does 'JSON.stringify()' do in JavaScript?",
        "choices": ["Parses JSON string", "Converts JavaScript object to JSON string", "Converts JSON string to JavaScript object"],
        "correctAnswer": "Converts JavaScript object to JSON string"
    },
];

export default jsquestions;