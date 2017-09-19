import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.template.html',
  styleUrls: ['./home.style.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-25%)', opacity: 0}),
          animate('300ms', style({transform: 'translateY(0)', opacity: 1}))
        ])
      ]
    )
  ]

})
export class HomePageComponent implements OnInit {

  /*
  The data that can be dynamic for the home page.
   */
  public homeData: any;

  /*
  Initialize variables.
   */
  constructor(private appService: AppService) {
  }

  /*
  Called initially when the application loads this component.
   */
  public ngOnInit(): void {

    this.homeData = this.appService.getHomeData();

  }


}
