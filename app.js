const question = [
    {
        'que': 'Which of the following is a markup languange?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'javaScript',
        'd': 'Php',
        'correct': 'a'
    },
    {
        'que': 'what year was JavaScript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None of above',
        'correct': 'b'
    },
    {
        'que': 'what does CSS stand for?',
        'a': 'Hyper Text markup language',
        'b': 'Cascading Style sheet',
        'c': 'jason Object Notaion',
        'd': 'Helicopters Terminials Motorboats Lamborginis',
        'correct': 'b'
    },
    {
        'que': 'Which of the following is a markup languange?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'javaScript',
        'd': 'Php',
        'correct': 'a'
    },
    {
        'que': 'what year was JavaScript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None of above',
        'correct': 'b'
    },
    {
        'que': 'what year was JavaScript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None of above',
        'correct': 'b'
    },
]

let index = 0;
let total = question.length;
let right = 0, wrong = 0;
const quesBox = document.querySelector("#quesBox");
const optionInputs = document.querySelectorAll(".option");



const loadQuestions = () => {
    if(index===total){
        return endQuiz();
    }
    reset();
    const data = question[index]
    quesBox.innerHTML = `${index + 1}) ${data.que}`;

    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = question[index]
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestions();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
               answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;

        }
    )
}

const endQuiz = () =>{
 document.querySelector("#box").innerHTML= `
 <h3>Thank You For Playing The Quiz...</h3>
 <h2>your score is ${right} out of ${total}</h2>
 `
}

loadQuestions();