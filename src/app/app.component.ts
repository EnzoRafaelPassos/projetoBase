import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})




export class AppComponent implements OnInit {
  
  title = 'projetoBase';
  codigoRMA: number = 12345;
  nome: string = "";
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;
  Media = (this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4;
  data: Date = new Date();
 

  calcularMedia() {
    this.Media = (this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4;
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
