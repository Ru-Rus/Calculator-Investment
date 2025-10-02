import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { interfaceInvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {
  // @Output() calculate = new EventEmitter<interfaceInvestmentInput>();
  calculate = output<interfaceInvestmentInput>();
  enteredInitialInvestment = signal('0');
  enterAnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');





  OnSubmit(){
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enterAnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration()
    });

    this.enteredInitialInvestment.set('0');
    this.enterAnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
