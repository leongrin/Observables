import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  user1Activated = false;
  user2Activated = false;
  subscription: Subscription;

  constructor(private userServ: UsersService) {}

  ngOnInit(): void {
    this.subscription = this.userServ.userActivated.subscribe(
      (id) => {
        if (id === 1) {
          this.user1Activated = true;
        } if (id === 2)  {
          this.user2Activated = true;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
