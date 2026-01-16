
const questions = [
 "Fale sobre você",
 "Quais são seus pontos fortes?",
 "Por que devemos te contratar?",
 "Como você lida com desafios?"
];

let index = 0;
const q = document.getElementById("question");
q.innerText = questions[index];

function next() {
  index++;
  document.getElementById("answer").value = "";
  if (index < questions.length) {
    q.innerText = questions[index];
  } else {
    q.innerText = "🎉 Entrevista finalizada!";
  }
}
