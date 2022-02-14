import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  inputText: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(){
    console.log(this.inputText);
    document.getElementById("textBox")!.innerText = this.inputText;
  }
}
