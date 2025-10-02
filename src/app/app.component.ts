import { Component, signal } from '@angular/core';
// import { HeaderComponent } from './header/header.component';
// import { UserInputComponent } from './user-input/user-input.component';
// import type { interfaceInvestmentInput } from './investment-input.model';
// import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})

export class AppComponent {
  // resultsData?:{
  //       year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[];
  resultsData = signal<
  {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[] | undefined
  >(undefined);



}
