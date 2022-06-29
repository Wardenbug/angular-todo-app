import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from "@angular/router";
import { Injectable } from '@angular/core';
import { RoutesName } from "../constants/routes";
import { IS_LOGGED_KEY } from "../constants/localStorage";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    public canActivate = (
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree => this.checkLogin(state.url);

    public checkLogin = (url: string): boolean | UrlTree => {
        const isLogin = localStorage.getItem(IS_LOGGED_KEY);

        if (isLogin !== null && isLogin === "true") {
            return url === `/${RoutesName.Login}` ? this.router.parseUrl(RoutesName.Home) : true;
        }

        return this.router.parseUrl(`/${RoutesName.Login}`);
    }
}