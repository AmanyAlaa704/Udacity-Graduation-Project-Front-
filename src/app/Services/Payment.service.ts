import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPayment } from '../SharedModels/Interface/IPayment';
 
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  url="https://localhost:44326";
 
  constructor(private _http:HttpClient) { }
 
  addNewPayment(newPayment:IPayment):Observable<IPayment>{
    let url = `${this.url}/api/Payment`;
    return this._http.post<IPayment>(url, newPayment)
            .pipe(catchError((err)=>{
              return throwError(err.message ||"Internal Server error contact site adminstarator");
                }
              ));
  }
}