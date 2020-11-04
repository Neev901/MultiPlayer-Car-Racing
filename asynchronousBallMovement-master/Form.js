class Form{
  constructor(){
    this.input = createInput("Enter Name")
    this.button = createButton("Play")
    this.greeting = createElement("h1")
    this.title = createElement("h1")

  }

  display(){
    this.title.html("MultiPLayer Car Racing Game")
    this.title.position(displayWidth/2-40, 10)
    this.input.position(displayWidth/2-30, displayHeight/2-80)
    this.button.position(displayWidth/2 + 30, displayHeight/2)
    this.button.mousePressed(()=>{
      this.input.hide()
      this.button.hide()
      player.name = this.input.value();
      Player_Count = Player_Count + 1; 
      player.index = Player_Count;
      player.Player_Writer();
      player.Count_Writer(Player_Count);
      this.greeting.html("Welcome" + player.name + " !")
      this.greeting.position(displayWidth/2, displayHeight/4)
    })
  }
}