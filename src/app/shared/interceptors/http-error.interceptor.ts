import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastService } from '../providers/toast/toast.service';
import { ErrorResponse } from '../class/utils';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    errors: ErrorResponse = {} as ErrorResponse;
    constructor(private toast: ToastService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    this.toast.sendMessage(error.error.message, 'danger');
                    return throwError(() => new Error(error.error.message));
                }));
    }
}
