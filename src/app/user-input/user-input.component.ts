import { Component, EventEmitter, output, Output, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import type { interfaceInvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {
  // @Output() calculate = new EventEmitter<interfaceInvestmentInput>();

  enteredInitialInvestment = signal('0');
  enterAnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}



  OnSubmit(){
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enterAnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration()
    });
    // this.calculate.emit();

    this.enteredInitialInvestment.set('0');
    this.enterAnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');


  }
}
