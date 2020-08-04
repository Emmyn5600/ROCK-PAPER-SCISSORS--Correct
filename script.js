var plays = new Array("Rock", "Paper", "Scissors");
      var userChoice = prompt("CHOOSE: Rock = 1, Paper = 2, Scissors = 3");
      var computerChoice = Math.floor(Math.random() * 3 + 1);

      var compare = function (computer, user) {
        if ((computer - user + 5) % 3 === 0) {
          return (
            "Sorry! Computer wins. " +
            plays[computer - 1] +
            " beats " +
            plays[user - 1] +
            "."
          );
        } else if ((computer - user + 5) % 3 === 1) {
          return (
            "You win!! " +
            plays[user - 1] +
            " beats " +
            plays[computer - 1] +
            "."
          );
        } else {
          return "It's a tie!";
        }
      };

      alert(
        "You chose " +
          plays[userChoice - 1] +
          " and the computer chose " +
          plays[computerChoice - 1] +
          ".\n\n" +
          compare(computerChoice, userChoice)
      );
