import {EventEmitter, Injectable} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
/**
 * Handles which state on the navigation bar should be marked as active based on the route changes.
 */
export class NavigationBarService {

  /*
  The current route that the application is at.
   */
  private currentRoute: string;

  /*
  THe route changed event that other components can subscribe to.
   */
  public $routeChanged: EventEmitter<any>;

  /*
  Initialize the service by subscribing to the events.
   */
  constructor(private router: Router) {
    this.$routeChanged = new EventEmitter();

    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        this.$routeChanged.emit(this.currentRoute);
      }
    });
  };

  /*
  A public getter that returns the value of the current route.
   */
  public getCurrentRoute(): string {
    return this.currentRoute;
  };

};
