class Game {
  limitMapX = 51;
  limitMapY = 33;  
  allPeaces = []
  numberPlayers: any;
  constructor(numberPlayers: number) {
    this.numberPlayers = numberPlayers;
  }

  onInit() {
    this.createBoard()
    this.createPeace(null, "blue", `<img src="./img/peao/peao1.png">`, "id-1-10", "", "")
    this.createPeace(null, "black", `<img src="./img/peao/peao2.png">`, "id-2-10", "", "")
    this.createPeace(null, "purple", `<img src="./img/peao/peao3.png">`, "id-3-10", "", "")
    this.createPeace(null, "red", `<img src="./img/peao/peao4.png">`, "id-4-10", "", "")
    this.createPeace(null, "pink", `<img src="./img/peao/peao5.png">`, "id-5-10", "", "")
    this.createPeace(null, "yellow", `<img src="./img/peao/peao6.png">`, "id-6-10", "", "")
    this.createPeace(null, "green", `<img src="./img/peao/peao7.png">`, "id-7-10", "", "")
    this.createPeace(null, "orange", `<img src="./img/peao/peao8.png">`, "id-8-10", "", "")
  }

  createBoard() {
    for (let i = 0; i < this.limitMapX; i++) {
      let ul = document.createElement("ul");
    
      for (let j = 0; j < this.limitMapY; j++) {
        let li = document.createElement("li");
        li.innerHTML = `<img src="./img/azulejo.png">`;
        li.setAttribute("id", `id-${i}-${j}`);
    
        ul.appendChild(li);
        document.querySelector("#board").appendChild(ul);
      }
    }
  }

  createPeace(id, color, image, initialPosition, currentPosition, beforePosition) {
    let peace = {}
    peace.id = this.allPeaces.length + 1
    peace.color = color
    peace.image = image
    peace.initialPosition = initialPosition
    peace.currentPosition	 = currentPosition
    peace.beforePosition = beforePosition
    if (peace.id <= this.numberPlayers){
      this.allPeaces.push(peace)
      console.log(peace)
    }
  }
  setUpPosition() {
    this.movePeace(0, this.allPeaces[0].initialPosition)
    this.movePeace(1, this.allPeaces[1].initialPosition)
    this.movePeace(2, this.allPeaces[2].initialPosition)
    this.movePeace(3, this.allPeaces[3].initialPosition)
    this.movePeace(4, this.allPeaces[4].initialPosition)
    this.movePeace(5, this.allPeaces[5].initialPosition)
    this.movePeace(6, this.allPeaces[6].initialPosition)
    this.movePeace(7, this.allPeaces[7].initialPosition)
  }

  movePeace(id, coordenada) {
    let move = document.querySelector(`#${coordenada}`);
    
    let beforePosition = this.allPeaces[id].beforePosition

    if (beforePosition !== "") {
      let moveBefore = document.querySelector(`#${beforePosition}`);
      moveBefore.innerHTML = `<img src="./img/azulejo.png">`;
    }
    
    if (move.innerHTML == `<img src="./img/azulejo.png">`){
      move.innerHTML = this.allPeaces[id].image;
      console.log("foi");
    } else {
      let moveBefore = document.querySelector(`#${beforePosition}`);
      moveBefore.innerHTML = this.allPeaces[id].image;           
      console.log("tem gente")
    }
    
    this.allPeaces[id].beforePosition = coordenada;     
  }

  walkPeace(idPeace, string) {
    let id = idPeace - 1
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

const game = new Game(8)
game.onInit()
game.setUpPosition()
game.walkPeace(2, "id-15-15")
game.walkPeace(2, "id-15-15")