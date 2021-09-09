const clientSocket = new WebSocket("ws://localhost:8000/ws");

const display = document.querySelector(".display");

var calculation = [];

const setDisplay = (text = "") => {
  calculation = [];
  display.innerText = text;
};
const buttonType = {
  "⌫":  () => {
    calculation.pop();
    display.innerText = calculation.join("");
  },
  "CE":  setDisplay,
  "=":   () => clientSocket.send( calculation.join("") )
};

for( const button of document.querySelectorAll(".calculator button") ){
  if(button.classList.contains("disabled")) continue;

  const doSomething = buttonType[button.innerText];
  if(doSomething){
    button.onclick = () => doSomething();
    continue;
  }

  let component = button.innerText;
  if(component == "x^y") component = "^";
  if(button.classList.contains("but")) component = " "+component+" ";

  button.onclick = () => {
    if(calculation.length >= 3) return;
    calculation.push(component);
    display.innerText = calculation.join("");
  }
}

clientSocket.addEventListener("message", (received) => {
  console.log(received.data);
  setDisplay(received.data);
});