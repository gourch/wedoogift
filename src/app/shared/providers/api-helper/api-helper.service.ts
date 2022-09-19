import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
  private _url: string;
  private _token: string;

  constructor(private http: HttpClient) {
    this._url = environment.api_url;
    this._token = environment.api_token;
  }

  requestApi(
    {
      action,
      method = 'GET',
      params = new HttpParams(),
      body = null,
      responseType = 'json'
    }: {
      action: string,
      method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
      params?: HttpParams,
      body?: any,
      responseType?: "json" | "arraybuffer" | "blob" | "text" | undefined,
    }
  ): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept-Language', 'en');
    headers = headers.append('Authorization', this.token)

    let request = new HttpRequest(
      method,
      this.url + action,
      body,
      {
        headers: headers,
        params: params,
        responseType: responseType
      }
    );

    return this.http.request(request).pipe(
      map(res => { return (res) ? res : false; })
    );

  }

  get url(): string {
    return this._url;
  }
  get token(): string {
    return this._token;
  }
}
