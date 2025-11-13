                                                    
                                                    
                                                    // Screen Target

let screen = document.getElementsByClassName("screen")[0];
let result = "";

                                                    // Screen Clear

document.getElementById("c").addEventListener("click",()=>
{
  screen.innerText = "0";
  result = "";
});

                                                    // Button 0-9

for (let i = 0; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener("click", () => {
    if (screen.innerText === "0") {
      screen.innerText = i.toString();
    } else {
      screen.innerText += i.toString();
    }
    result += i.toString();
  });
}

                                                    // Functionality of + - * / and =

document.getElementById("+").addEventListener("click", () => {
  result += "+";
  screen.innerText = result;
});

document.getElementById("-").addEventListener("click", () => {
  result += "-";
  screen.innerText = result;
});

document.getElementById("*").addEventListener("click", () => {
  result += "*";
  screen.innerText = result;
});

document.getElementById("/").addEventListener("click", () => {
  result += "/";
  screen.innerText = result;
});

// = button
document.getElementById("=").addEventListener("click", () => {
  let equal = eval(result);
  screen.innerText = equal;
  result = result.toString();
});                                                    

