class Question {

  constructor() {
    this.title = createElement('h1')
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
    this.input1 = createInput("Your Name... ");
    this.input2 = createInput("Your Option... ");
    this.button = createButton('Submit');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- Which is mascot of Pokemon company? " );
    this.question.position(150, 80);

    this.option1.html("1: Charizard " );
    this.option1.position(150, 100);

    this.option2.html("2: Lucario " );
    this.option2.position(150, 120);

    this.option3.html("3: Pikachu " );
    this.option3.position(150, 140);
    
    this.option4.html("4: Greninja " );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
      this.message.html("Thank You, Your Answer Has Been Submitted");
      this.message.position(350, 350);


    });
  }
}
