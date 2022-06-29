import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { CryptService } from './crypt.service';
import { IS_LOGGED_KEY } from "../constants/localStorage";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn: boolean = false;


  public login = (userName: string, password: string): Observable<boolean> => {
    this.isLoggedIn = userName.length > 0 && password.length > 0;
    this.cryptService.setMasterKey(password);

    localStorage.setItem(IS_LOGGED_KEY, this.isLoggedIn.toString());

    return of(this.isLoggedIn).pipe(
      delay(500),
      tap(response => {
        console.log("Successful: " + response);
      })
    );
  }

  public logout = () => {
    this.isLoggedIn = false;
    localStorage.removeItem(IS_LOGGED_KEY);
  }

  constructor(private cryptService: CryptService) { }
}
