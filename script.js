var limitMapX = 51;
var limitMapY = 33;

for (let i = 0; i < limitMapX; i++) {
  let ul = document.createElement("ul");

  for (let j = 0; j < limitMapY; j++) {
    let li = document.createElement("li");
    li.innerHTML = `<img src="./img/azulejo.png">`;
    li.setAttribute("id", `id-${i}-${j}`);

    ul.appendChild(li);
    document.querySelector("#board").appendChild(ul);
  }
}

class Peace {
  beforePosition = "";
  constructor(id, color, image, initialPosition, currentPosition) {
    this.id = id;
    this.color = color;
    this.image = image;
    this.initialPosition = initialPosition;
    this.currentPosition = currentPosition;
  }

  movePeace(coordenada) {
    let move = document.querySelector(`#${coordenada}`);

    if (this.beforePosition !== "") {
      let moveBefore = document.querySelector(`#${this.beforePosition}`);
      moveBefore.innerHTML = `<img src="./img/azulejo.png">`;
    }
    
    if (move.innerHTML == `<img src="./img/azulejo.png">`){
      move.innerHTML = this.image;
      console.log("foi");
    } else {
      let moveBefore = document.querySelector(`#${this.beforePosition}`);
      moveBefore.innerHTML = this.image;           
      console.log("tem gente")
    }
    
    this.beforePosition = coordenada;
  }

  walkPeace(string) {
    let arrayStrings = string.split("-");
    let x = Number(arrayStrings[1]);
    let y = Number(arrayStrings[2]);
    
    let coordenada = "id" + "-" + x + "-" + y;
    
    if (coordenada == this.beforePosition) {
      console.log("msm posicao");
    } else if (x < limitMapX && y < limitMapY) {
      this.movePeace(coordenada);
      
    } else {
      console.log("n pode poha");
    }
  }
}


const blackPeace = new Peace("2", "black", `<img src="./img/peao/peao2.png">`, "id-15-15")
const redPeace = new Peace("4", "red", `<img src="./img/peao/peao4.png">`, "id-10-10");
const bluePeace = new Peace("1", "blue", `<img src="./img/peao/peao1.png">`, "id-25-25");
redPeace.walkPeace("id-10-10")
bluePeace.walkPeace("id-0-0")
redPeace.walkPeace("id-0-0")
bluePeace.walkPeace("id-0-0")
bluePeace.walkPeace("id-10-10")
blackPeace.walkPeace("id-20-20")










