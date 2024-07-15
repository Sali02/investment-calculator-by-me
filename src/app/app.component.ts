import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CalculateFormComponent } from './calculate-form/calculate-form.component';

import { DecimalPipe } from '@angular/common';

interface CalculateFormData {
  initialInvestment: number;
  annualInvestment: number;
  returnInvestment: number;
  years: number
};


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CalculateFormComponent, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investment-calculator-by-me';
  returnNumber: number = 0;
  result: number = 0;

  results: Array<number> = [];
  showTable: boolean = false;
  

  onCalculateData(event: CalculateFormData) {
    this.showTable = false;
    this.result = 0;
    this.results = [];
    for(let i = 0; i < event.years; i++) {
      if(this.result == 0) {
        this.result = event.initialInvestment;
      }
      this.result = this.result + event.annualInvestment; 
      this.returnNumber = (this.result * event.returnInvestment) / 100;
      this.result = this.result + this.returnNumber;
      console.log(this.result);
      this.results.push(this.result);
    }
    this.showTable = true;
  }
  
}
