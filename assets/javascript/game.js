// starting values
let wins = 0
let losses = 0
let gameStat = []


// prompt attack mode
// function attack() {
//   var x = document.createElement("IMG");
//   x.setAttribute("src", "./assets/images/ashe-battle.jpg");
//   x.setAttribute("width", "590");
//   x.setAttribute("height", "332");
//   x.setAttribute("alt", "Ashe Battle");
//   document.body.appendChild(x);
// }

// document.addEventListener("click", event => {
//   if (event.target.className === "players") {
//     battle()
//   }
// })
// function battle() {
//   let heroes = document.createElement(`div`)
//   heroes.className = `col s6`
//   heroes.innerHTML = `<img src="assets/images/sombra-battle.png" alt="sombra" value="3">`
//   document.getElementById(`battle`).append(heroes)
// }

// start game
function game() {
  let goal = Math.floor(Math.random() * 100) + 40
  console.log(goal)
  let current = 0

  // random values for players 
  let playersArray = []
  for (var i = 0; i < 4; i++) {
    playersArray[i] = Math.floor(Math.random() * 20) + 1
  }
  console.log(playersArray)

  // onclick event class players
  //document.addEventListener("click", ".players",  function (event) {})
  $(".players").on("click", function (event) {

    let index = $(this).val()
    console.log("index:", index)
    current += playersArray[index]
    console.log("current:", current)



    // goal   / current  // verify if you win or lose  or keep playing
    if (current > goal) {
      losses++
      document.getElementById('status').innerHTML = "You Lost!"
      game()
    }
    else if (current === goal) {
      wins++
      document.getElementById('status').innerHTML = "You Won!"
      game()

    }
  })
}
game()

