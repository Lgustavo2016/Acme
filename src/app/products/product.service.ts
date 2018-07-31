import { Injectable } from "../../../node_modules/@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

//The @Injectable() decorator, makes that class usable as injector to another classes
@Injectable({
    //This decorator property, defines where this service should be available
    providedIn: 'root'
})
export class ProductService {

    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) { }

    //Returns an Observable of Products
    getProducts(): Observable<IProduct[]> {

        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {

        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';

        if (err.error instanceof ErrorEvent) {
            // A client-side or network error ocurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);

        return throwError(errorMessage);
    }


}