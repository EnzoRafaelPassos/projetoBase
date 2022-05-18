import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoBase';
  codigoRMA: number | undefined;
   Nome: string = "";
   nota1: number = 0;
   nota2: number = 0;
   nota3: number = 0;
   nota4: number = 0;
   Media: number = 0;

  constructor() {
   this.Media = this.nota1 + this.nota2 + this.nota3 + this.nota4 /4;

  }

  ngOnInit(): void {
  }
}
