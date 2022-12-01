import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { AppConstants } from 'src/app/constants';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Assign the observable to user$ variable and subscribe inside template
  //user$: Observable<any>;

  // Inject AuthService to Dashboard layoit component and call LoadUser
  constructor(
    public authContext: AuthService,
    private _router: Router
  ) {
    //this.user$ = this._authContext.loadUser();
  }

  ngOnInit(): void {
  }

  logout() {
    this.authContext.logout().subscribe((apiResponse: any) => {
      // succesfully logout if id>0
      if(apiResponse && apiResponse.id > 0) {
        localStorage.removeItem(AppConstants.myTokenKey);
        this._router.navigate(['/']);
      }
    })
  }
}
