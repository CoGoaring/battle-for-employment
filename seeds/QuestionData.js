const { Question } = require("../models");

const QuestionData = [
    {
        question: "How are comments added in HTML?",
        type: "choice",
        answer: "<!–- Comment -–>",
        choice1: "// Comment",
        choice2: "/* Comment */",
        choice3: "<!–- Comment -–>",
        choice4: "< Comment >",
        difficult: "easy",
        villain_id: "1",
    },
    {
        question: "How to create a link in HTML?",
        type: "choice",
        answer: "Using the <a> tag with the 'href' attribute",
        choice1: "Using the <link> tag",
        choice2: "Using the <a> tag with the 'href' attribute",
        choice3: "With the <anchor> tag",
        choice4: "Using the <a> tag with 'src'",
        difficult: "easy",
        villain_id:"1",
    },
    {
        question: "What is the use of alt attribute in images?",
        type: "choice",
        answer: "To provide alternative text",
        choice1: "To define image size",
        choice2: "To set image alignment",
        choice3: "To specify background color",
        choice4: "To provide alternative text",
        difficult: "easy",
        villain_id:"1",
    },
    {
        question: 'What is the correct JavaScript syntax to write "Hello World"?',
        type: "choice",
        answer: 'document.write("Hello World")',
        choice1: "System.out.println('Hello World')",
        choice2: 'println ("Hello World")',
        choice3: 'document.write("Hello World")',
        choice4: 'response.write("Hello World")',
        difficult: "medium",
        villain_id:"2",
    },
    {
        question: 'Which of the following is not considered a JavaScript operator?',
        type: "choice",
        answer: 'this',
        choice1: 'new',
        choice2: 'this',
        choice3: 'delete',
        choice4: 'typeof',
        difficult: "medium",
        villain_id:"2",
    },
    {
        question: "What is the result of console.log(true + false) in the console?",
        type: "choice",
        answer: "1",
        choice1: "true",
        choice2: "false",
        choice3: "1",
        choice4: "truefalse",
        difficult: "medium",
        villain_id:"2",
    },
    {
        question: 'The syntax of close method for document object is ________.',
        type: "choice",
        answer: 'Close()',
        choice1: 'Close(object)',
        choice2: 'Close(val)',
        choice3: 'Close()',
        choice4: 'Close(doC.',
        difficult: "hard",
        villain_id:"3",
    },
    {
        question: 'The syntax of capture events method for document object is _______.',
        type: "choice",
        answer: 'captureEvents(eventType)',
        choice1: 'captureEvents()',
        choice2: 'captureEvents(args eventType)',
        choice3: 'captureEvents(eventType)',
        choice4: 'captureEvents(eventVal)',
        difficult: "hard",
        villain_id:"3",
    },
    {
        question: 'The _______ method of an Array object adds and/or removes elements from an array.',
        type: "choice",
        answer: 'Splice',
        choice1: 'Reverse',
        choice2: 'Shift',
        choice3: 'Slice',
        choice4: 'Splice',
        difficult: "hard",
        villain_id:"3",
    },
    {
        question: 'A ________ object is a reference to one of the classes in a Java package, such as netscape.javascript.',
        type: "choice",
        answer: 'JavaClass',
        choice1: 'JavaArray',
        choice2: 'JavaClass',
        choice3: 'JavaObject',
        choice4: 'JavaPackage',
        difficult: "hard",
        villain_id:"3",
    },
    {
        question: "Which companies are considered major players in the collection and management of large amounts of data?",
        type: "choice",
        answer: "GAM",
        choice1: "GAM",
        choice2: "GAM",
        choice3: "GAM",
        choice4: "GAM",
        difficult: "insane",
        villain_id:"3",
    },
]

const seedQuestion = () => Question.bulkCreate(QuestionData);
module.exports = seedQuestion;