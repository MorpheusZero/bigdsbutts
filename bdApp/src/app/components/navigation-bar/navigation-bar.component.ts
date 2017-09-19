import { Component } from '@angular/core';
import { NavigationBarService } from './navigation-bar.service';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.template.html',
  styleUrls: ['./navigation-bar.style.scss'],
  providers: [NavigationBarService]
})
export class NavigationBarComponent {

  /*
  The page we are currently on.
   */
  private currentRoute: string;

  /*
  Subscribe to the event that handles detecting when a navigation has occurred.
   */
  constructor(private navService: NavigationBarService) {

    this.currentRoute = '/';

    this.navService.$routeChanged.subscribe(route => {

      this.currentRoute = route;

    });

  };

  /*
  Given the page URL, detects whether or not we are currently on that page.
   */
  public getActivePageClass(pageUrl): string {
      return (pageUrl === this.currentRoute) ? 'active' : '';
  };

};
