import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { RoutesName } from 'src/app/constants/routes';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  public handleLogout = () => {
    this.authService.logout();
    this.router.navigate([`/${RoutesName.Login}`]);
  }
  public ngOnInit = () => {
  }

}
