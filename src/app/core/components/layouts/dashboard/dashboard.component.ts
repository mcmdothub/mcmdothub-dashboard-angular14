import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    public authContext: AuthService
  ) {
    //this.user$ = this._authContext.loadUser();
  }

  ngOnInit(): void {
  }

}
