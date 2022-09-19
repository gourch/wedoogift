import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CalculatorResponse } from '../../class/calculator/calculator';
import { CalculatorService } from '../../providers/calculator/calculator.service';
import { ToastService } from '../../providers/toast/toast.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnChanges {
  @Input() amount!: number;
  @Output() amountChange = new EventEmitter<number>();

  calculatorResponse: CalculatorResponse = {} as CalculatorResponse;
  selectedItem!: number;

  constructor(private calculatorService: CalculatorService) { }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (!changes['amount'].isFirstChange()) {
       await this.calculatorService.searchCombination(this.amount)
      .then(res => {
        if (res.body) {
          this.calculatorResponse = res.body;
          if (!this.calculatorResponse.equal) {
            if (this.calculatorResponse.floor && !this.calculatorResponse.ceil) {
              this.selectAmount(this.calculatorResponse.floor.value);
            } else if (!this.calculatorResponse.floor && this.calculatorResponse.ceil) {
              this.selectAmount(this.calculatorResponse.ceil.value);
            }
          }
        }
      });
    }
  }
  
  selectAmount(amount: number) {
    this.amountChange.emit(amount);
  }


}



   