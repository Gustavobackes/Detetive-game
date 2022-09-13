class Game {
  limitMapX = 51;
  limitMapY = 33;
  beforePosition = "";
  allPeaces = [];
  constructor(numberPlayers) {
    this.numberPlayers = numberPlayers;
  }

  onInit() {
    this.createBoard();
    this.createPeace(
      1,
      "blue",
      `<img src="../img/peao/peao1.png">`,
      "id-25-25",
      "",
      ""
    );
    this.createPeace(
      2,
      "black",
      `<img src="../img/peao/peao2.png">`,
      "id-25-25",
      "",
      ""
    );
    this.createPeace(
      3,
      "purple",
      `<img src="../img/peao/peao3.png">`,
      "id-25-25",
      "",
      ""
    );
    this.createPeace(
      4,
      "red",
      `<img src="../img/peao/peao4.png">`,
      "id-25-25",
      "",
      ""
    );
    this.createPeace(
      5,
      "pink",
      `<img src="../img/peao/peao5.png">`,
      "id-25-25",
      "",
      ""
    );
    this.createPeace(
      6,
      "blue",
      `<img src="../img/peao/peao6.png">`,
      "id-25-25",
      "",
      ""
    );
    this.createPeace(
      7,
      "blue",
      `<img src="../img/peao/peao7.png">`,
      "id-25-25",
      "",
      ""
    );
    this.createPeace(
      8,
      "blue",
      `<img src="../img/peao/peao8.png">`,
      "id-25-25",
      "",
      ""
    );
    console.log(this.allPeaces);
  }

  createBoard() {
    for (let i = 0; i < this.limitMapX; i++) {
      let ul = document.createElement("ul");

      for (let j = 0; j < this.limitMapY; j++) {
        let li = document.createElement("li");
        li.innerHTML = `<img src="../img/azulejo.png">`;
        li.setAttribute("id", `id-${i}-${j}`);

        ul.appendChild(li);
        document.querySelector("#board").appendChild(ul);
      }
    }
  }

  createPeace(
    id,
    color,
    image,
    initialPosition,
    currentPosition,
    beforePosition
  ) {
    let peace = {};
    peace.id = this.allPeaces.length + 1;
    peace.color = color;
    peace.image = image;
    peace.initialPosition = initialPosition;
    peace.currentPosition = currentPosition;
    peace.beforePosition = beforePosition;
    if (peace.id <= this.numberPlayers) {
      this.allPeaces.push(peace);
    }
  }

  movePeace(id, coordenada) {
    let move = document.querySelector(`#${coordenada}`);

    let beforePosition = this.allPeaces[id].beforePosition;

    if (beforePosition !== "") {
      let moveBefore = document.querySelector(`#${beforePosition}`);
      moveBefore.innerHTML = `<img src="../img/azulejo.png">`;
    }

    if (move.innerHTML == `<img src="../img/azulejo.png">`) {
      move.innerHTML = this.allPeaces[id].image;
      console.log("foi");
    } else {
      let moveBefore = document.querySelector(`#${beforePosition}`);
      moveBefore.innerHTML = this.allPeaces[id].image;
      console.log("tem gente");
    }

    this.allPeaces[id].beforePosition = coordenada;
  }

  walkPeace(idPeace, string) {
    let id = idPeace - 1;
    let arrayStrings = string.split("-");
    let x = Number(arrayStrings[1]);
    let y = Number(arrayStrings[2]);
    let coordenada = "id" + "-" + x + "-" + y;

    if (coordenada == this.allPeaces[id].beforePosition) {
      console.log("msm posicao");
    } else if (x < 51 && y < 33) {
      this.movePeace(id, coordenada);
    } else {
      console.log("código errado");
    }
  }
}

const game = new Game(5);
game.onInit();
game.walkPeace(1, "id-10-10");
game.walkPeace(1, "id-0-0");
game.walkPeace(1, "id-0-0");
game.walkPeace(2, "id-1-0");
game.walkPeace(3, "id-2-0");
game.walkPeace(4, "id-3-0");
game.walkPeace(5, "id-4-0");
game.walkPeace(5, "id-3-0");
