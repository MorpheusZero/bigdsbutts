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
      'enterCaption', [
        transition(':enter', [
          style({transform: 'translateY(-50%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
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
  constructor(private appService: AppService, private router: Router) {
  }

  /*
  Called initially when the application loads this component.
   */
  public ngOnInit(): void {
    this.homeData = this.appService.getHomeData();
  }

  /*
  Navigates to the menu state.
   */
  public goToMenu(): void {
    this.router.navigateByUrl('/menu');
  }


}
