import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculatorResponse } from '../shared/class/calculator/calculator';
import { CalculatorService } from '../shared/providers/calculator/calculator.service';
import { ToastService } from '../shared/providers/toast/toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loadingRequest: boolean = false;
  form: FormGroup = new FormGroup({});

  currentAmount: number = 0;
  calculatorResponse: CalculatorResponse = {} as CalculatorResponse;

  constructor(
    private formBuilder: FormBuilder,
    private calculatorService: CalculatorService,
    private toast: ToastService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      amount: [this.currentAmount, Validators.required]
    });
  }

  onSubmit(): void {
    this.currentAmount = this.form.value.amount;
  }

  updateAmount(amount: number): void {
    this.form.get("amount")?.patchValue(amount);
    this.currentAmount = amount;
  }

  async nextAmount(): Promise<void> {
    await this.calculatorService.searchCombination(this.currentAmount + 1)
      .then(res => {
        if (res.body) {
          this.calculatorResponse = res.body;
          if (this.calculatorResponse.ceil) {
            this.updateAmount(this.calculatorResponse.ceil.value);
          } else {
            this.toast.sendMessage("Plus de montant supérieur", 'information');
          }
        }
      });
  }

  async previewAmount(): Promise<void> {
    await this.calculatorService.searchCombination(this.currentAmount - 1)
      .then(res => {
        if (res.body) {
          this.calculatorResponse = res.body;
          if (this.calculatorResponse.floor) {
            this.updateAmount(this.calculatorResponse.floor.value);
          } else {
            this.toast.sendMessage("Plus de montant inférieur", 'information');
          }
        }
      });
  }

}
