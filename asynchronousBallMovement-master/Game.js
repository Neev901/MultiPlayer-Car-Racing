class Game{
  constructor(){

  }
  Game_State_Listener(){
    var refer = DB.ref("Game_State")
    refer.on('value', (data)=>{
      gameState = data.val();
    })
  }
  Game_State_Writer(State){
    DB.ref().update({
      gameState : State
    })
  }
}