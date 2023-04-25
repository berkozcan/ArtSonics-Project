function newGame() {

    var resultElement = document.getElementById("result");
    

    var n0 = Math.floor(Math.random() * 10) + 1;
    var n1 = Math.floor(Math.random() * 100) + 1;
    var n2 = Math.floor(Math.random() * 100) + 1;
    
    // Calculate the IDmod3
    var idMod3 = (55850 % 3) + 1;
    
 
    var winCondition;
    if (55850 % 2 == 0) {
      winCondition = function(a, b) { return a < b };
    } else {
      winCondition = function(a, b) { return a > b };
    }
    
  
    resultElement.innerHTML = "Number 1: " + n2 + ", Number 2: " + n1;
    
    if (winCondition(n2, n1)) {
      resultElement.innerHTML += "<br>You win!";
    } else {
      resultElement.innerHTML += "<br>You lose!";
    }
  }
  