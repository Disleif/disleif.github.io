let nbPlayers = 0;


for (let card of document.getElementsByClassName("card")) {
  card.addEventListener("click", function handleClick() {
    card.removeEventListener("click", handleClick);
    card.classList.toggle("reversed");
    setTimeout(() => {
      if (card.classList.contains("reversed")) {
        for (let recto of card.getElementsByClassName("recto")) {
          recto.style.display = "none";
        }
        for (let verso of card.getElementsByClassName("verso")) {
          verso.style.display = "block";
        }
      } else {
        for (let recto of card.getElementsByClassName("recto")) {
          recto.style.display = "block";
        }
        for (let verso of card.getElementsByClassName("verso")) {
          verso.style.display = "none";
        }
      }
    }, 500);
    setTimeout(() => {
      card.addEventListener("click", handleClick);
    }, 1000);
  });
}


