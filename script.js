let buttons = document.querySelectorAll('button');
let string = "";
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == "=") {

      try {
        string = eval(string);

      }
      catch (err) {
        string = "Error"
      }

    }
    else if (e.target.innerHTML == "AC") {
      string = " "
    }
    else if (e.target.innerHTML == "Del") {

      string = string.slice(0, string.length - 1);
    }
    else {
      string = string + e.target.innerHTML;
    }
    // console.log(string);

    document.querySelector('input').value = string;
  })
})