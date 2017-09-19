import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu.template.html',
  styleUrls: ['./menu.style.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-25%)', opacity: 0}),
          animate('300ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('300ms', style({transform: 'translateY(-25%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class MenuPageComponent implements OnInit {

  /*
  Initialize variables.
   */
  constructor(private appService: AppService) {

  }

  /*
  Initially called when angular has loaded the component.
   */
  public ngOnInit(): void {
  }


}
