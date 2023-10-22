import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import { id } from "src/assets/all-modules-data/id";

@Injectable({
  providedIn: "root",
})
export class AllModulesService {


  // Api Methods for All modules

  public apiurl:string = '';

  // Headers Setup
  headers = {
    headers: {
      Accept: "application/json",
      authorization: sessionStorage.getItem("token") || "",
    },
  };

  tempHeader = {
    headers: { authorization: sessionStorage.getItem("temp") },
  };

  constructor(private http: HttpClient) {}

  // Handling Errors
  private handleError(error: any) {
    return throwError(error);
  }

  // Get Method Api
  get(type: any): Observable<any> {
    // this.headers.headers["authorization"] = "";
    this.apiurl = `http://localhost:3000${type}`;
    return this.http.get(this.apiurl, this.headers).pipe(
      map((res: any) => res),
      catchError((err: any) => throwError(err))
    );
  }

  // Post Method Api
  add(user: any, type: any): Observable<any> {
    this.apiurl = `http://localhost:3000${type}`;
    return this.http.post(this.apiurl, user, this.headers).pipe(
      map((res: any) => res),
      catchError((err: any) => throwError(err))
    );
  }

  // Update Method Api
  update(user: any, type: any): Observable<any> {
    // this.headers.headers["authorization"] = "";
    this.apiurl = `http://localhost:3000${type}`;
    return this.http.patch<any>(this.apiurl, user, this.headers).pipe(
      map((res: any) => res),
      catchError((err: any) => throwError(err))
    );
  }

  // Delete Method Api
  delete(id: string | string[]): Observable<id> {
    // this.headers.headers["authorization"] = "";
    const url = `${this.apiurl}?id=${id}`;
    return this.http.delete<id>(url, this.headers).pipe(
      map((res: any) => res),
      catchError((err: any) => throwError(err))
    );
  }
}
