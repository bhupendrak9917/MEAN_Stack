type Player = {
    name: string
    age: number
    isCaptain?: boolean
}
  
const player1: Player = {
    name: "Tilak Verma",
    age: 22,
}
player1.isCaptain = player1.isCaptain ?? false
  