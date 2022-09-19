import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiHelperService } from '../api-helper/api-helper.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private _id;

  constructor(private apiHelperService: ApiHelperService) {
    this._id = environment.accepted_shop_id;
  }

  public async searchCombination(amount: number): Promise<any> {
    let params = new HttpParams();
    params = params.append('amount', amount);

    const res$ = this.apiHelperService.requestApi({
      action: 'shop/'+this.id+'/search-combination',
      method: 'GET',
      params: params
    });
    const res = await lastValueFrom(res$);
    return res;
  }

  get id(): string {
    return this._id;
  }
}
