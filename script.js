class Game {
  limitMapX = 51;
  limitMapY = 33;  
  beforePosition = "";
  allPeaces = []
  constructor() {
  }

  onInit() {
    this.createBoard()
    this.createPeace(1, "blue", `<img src="./img/peao/peao1.png">`, "id-25-25", "id-0-0")
    this.createPeace(2, "black", `<img src="./img/peao/peao2.png">`, "id-25-25", "id-0-0")
    this.createPeace(3, "blue", `<img src="./img/peao/peao3.png">`, "id-25-25", "id-0-0")
    this.createPeace(4, "blue", `<img src="./img/peao/peao4.png">`, "id-25-25", "id-0-0")
    console.log(this.allPeaces)
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
    peace.id = id
    peace.color = color
    peace.image = image
    peace.initialPosition = initialPosition
    peace.currentPosition	 = currentPosition
    peace.beforePosition = beforePosition
    
    this.allPeaces.push(peace)
    console.log(peace)
  }

  movePeace(coordenada, id) {
    let move = document.querySelector(`#${coordenada}`);

    for (let i = 0; i < this.allPeaces.length; i++){
      if (this.allPeaces[i].id == id) {

        if (this.beforePosition !== "") {
          let moveBefore = document.querySelector(`#${this.beforePosition}`);
          moveBefore.innerHTML = `<img src="./img/azulejo.png">`;
        }
        
        if (move.innerHTML == `<img src="./img/azulejo.png">`){
          move.innerHTML = this.allPeaces[i].image;
          console.log("foi");
        } else {
          let moveBefore = document.querySelector(`#${this.beforePosition}`);
          moveBefore.innerHTML = this.allPeaces[i].image;           
          console.log("tem gente")
        }
        
        this.allPeaces[i].beforePosition = coordenada;
      }
    }
    
    
  }

  walkPeace(string) {
    let arrayStrings = string.split("-");
    let x = Number(arrayStrings[1]);
    let y = Number(arrayStrings[2]);
    
    let coordenada = "id" + "-" + x + "-" + y;
    
    if (coordenada == this.beforePosition) {
      console.log("msm posicao");
    } else if (x < 51 && y < 33) {
      this.movePeace(coordenada);
      
    } else {
      console.log("código errado");
    }
  }

  setUpPosition() {

  }
}


// const blackPeace = new Game(2, "black", `<img src="./img/peao/peao2.png">`, "id-15-15");
// const redPeace = new Peace(4, "red", `<img src="./img/peao/peao4.png">`, "id-10-10");
// const bluePeace = new Peace(1, "blue", `<img src="./img/peao/peao1.png">`, "id-25-25");
const game = new Game()
game.onInit()
game.movePeace("id-10-10", 1)
game.movePeace("id-30-30", 2)
game.movePeace("id-0-0", 4)













