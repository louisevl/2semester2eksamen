//Spørgsmålene opstillet i objekt
const quizData = [
    {
        question: "Hvad vil det sige at være veganer?",
        a: "Man spiser kun animalske produkter",
        b: "Man spiser kun fisk",
        c: "Man er allergisk overfor grøntsager",
        d: "Man spiser ingen animalske produkter",
        correct: "d",
    },
    {
        question: "Hvad er en god vegansk proteinkilde?",
        a: "Bønner",
        b: "Æbler",
        c: "Honning",
        d: "Rødt kød",
        correct: "a",
    },
    {
        question: "Hvad er et plantebaseret produkt?",
        a: "Et produkt der består 100% af planter",
        b: "Et produkt der består minimum 80% af planter",
        c: "Et produkt der består minimum 70% af planter",
        d: "Et produkt der består minimum 50% af planter",
        correct: "a",
    },
    {
        question: "Hvad er den primære årsag til, at danskerne er veganere?",
        a: "Ønsket vægttab",
        b: "Dyreetik",
        c: "Sundere livsstil",
        d: "Alle de ovenstående",
        correct: "b",
    },


];

//Definerer konstanter fra HTML

const quiz = document.getElementById('quiz')
const answElements = document.querySelectorAll('.answer')
const queElement = document.getElementById('question')
const o_a = document.getElementById('o_a')
const o_b = document.getElementById('o_b')
const o_c = document.getElementById('o_c')
const o_d = document.getElementById('o_d')
const submitBtn = document.getElementById('submit')

//Variabler, der tæller score og hvilket spørgsmål vi er på. Vi starter naturligvis på 0
let currentQuiz = 0
let score = 0


loadQuiz() 

//Funktion, der loader vores quiz
function loadQuiz() {

    deselectAnswers()

    //Definerer vores objekts givne spørgsmål. 
    const currentQuizData = quizData[currentQuiz]

    //Sammenkobler vores data fra JS med HTML
    queElement.innerText = currentQuizData.question
    o_a.innerText = currentQuizData.a
    o_b.innerText = currentQuizData.b
    o_c.innerText = currentQuizData.c
    o_d.innerText = currentQuizData.d
}

//Finder ud af, hvilket svar, der er blevet valgt
function getSelected() {
    let answer
    answElements.forEach(answElement => {
        if(answElement.checked) {
            answer = answElement.id
        }
    })
    return answer
}



//Sørger for, at man kun kan vælge ét svar.
function deselectAnswers() {
    answElements.forEach(answElement => answElement.checked = false)
}




//Betyder, at den kører nedstående, når der bliver klikket på vores knap.
submitBtn.addEventListener('click', () => {

    //konstant, gemmer det givne svar.
    const answer = getSelected()

    //Tjekker om det valgte svar, er det korrekte svar, som er angivet i objektet. Hvis det er det, skal den øge ens score med 1
    if(answer === quizData[currentQuiz].correct) {
        score++
    }
    //Øger spørgsmålet med 1, ergo at man går videre til næste spørgsmål
    currentQuiz++

    //Gør således, at hvis der er flere spørgsmål, så kører quizzen videre, og hvis ikke, så giver den dig et resultat og 
    //spørger om du vil prøve igen.
    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `
        <h2>Du svarede rigtigt på ${score}/${quizData.length} spørgsmål!</h2>
        <p>Vil du prøve igen?<p>

        <button onclick="location.reload()">Prøv igen</button>
        `
    }
    
})
