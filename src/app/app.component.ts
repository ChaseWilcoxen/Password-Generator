
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  length:number = 8;
  includeLetters:boolean = false;
  includeNumber:boolean = false;
  includeSymbols:boolean = false;

  password:string = '';

  onChangeLength($event: any){
    const parseValue = parseInt($event.target.value);
    if(!isNaN(parseValue)){
      this.length=parseValue
    }
    console.log(this.length);
    
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
    
    
  }
  onChangeUseNumbers(){
    this.includeNumber = !this.includeNumber;
    
    
  }
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
    
    
  }

  onGeneratePassword(){
    const numbers ='1234567890';
    const letters ='abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_-?><';

    let validChars = '';

    if(this.includeLetters){
      validChars += letters;
    }
    if(this.includeNumber){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword ='';

    for(let i = 0;i<this.length;i++){
      const index = Math.floor(Math.random()* validChars.length)
      generatedPassword += validChars[index]
    }
    this.password = generatedPassword;
  }
  




}
