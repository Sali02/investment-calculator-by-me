
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface CalculateFormData {
  initialInvestment: number;
  annualInvestment: number;
  returnInvestment: number;
  years: number
};

@Component({
  selector: 'app-calculate-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculate-form.component.html',
  styleUrl: './calculate-form.component.css'
})
export class CalculateFormComponent {
  calculateFormData: CalculateFormData = {
    initialInvestment: 0,
    annualInvestment: 0,
    returnInvestment: 0,
    years: 0
  };
  

  @Output() sendData = new EventEmitter<CalculateFormData>();

  

  onSubmit() {
    this.sendData.emit(this.calculateFormData);
  }
}
