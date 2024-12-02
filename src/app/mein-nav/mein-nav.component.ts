import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-mein-nav',
  templateUrl: './mein-nav.component.html',
  styleUrls: ['./mein-nav.component.scss']
})
export class MeinNavComponent {
  public isLoggedIn$: Observable<boolean> = new Observable();

  constructor(private authService: AuthService){}

  public ngOnInit(){
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }

  public logout(){
    this.authService.logout();
  }

}
