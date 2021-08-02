/**
 * Utils service is a service of commonly used methods.
 * utils.service is used in APIs service files so calls like http.get => utils.httpGet
 */
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class UtilsService {

  constructor(private http: HttpClient) { }
  httpGet(url: string) {
    return this.http.get(url).pipe(catchError(err => err));
  }

}
