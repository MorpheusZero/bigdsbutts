import { Injectable } from '@angular/core';
import 'rxjs/Rx';

/**
A global service with reusable pieces that will benefit the entire application.
 */
@Injectable()
export class AppService {

  /*
  Initialize variables.
   */
  constructor() {
  }

  /**
   * Returns some data needed for the home page.
   * @returns {any}
   */
  public getHomeData(): any {

    const homeData = {
      about: 'This is a family run and operated business serving the public with GREAT Slow smoked pull pork, ribs, chicken, Chicken and Pork Wraps BBQ Baked Potatoes, potato salad, baked beans, hamburgers, Homemade Desserts.etc. We are open Tuesday-Saturday for selected hours, but are available to CATER on the weekends for your special events--Family Reunions, Weddings, You name it. We will cook for it. The atmosphere will be laid back and comfortable.',
      phoneNumber: '(251) 743-4227',
      email: 'bigdsbutts@yahoo.com',
      hours: {
        SUNDAY: 'CLOSED',
        MONDAY: 'CLOSED',
        TUESDAY: '11:00am - 2:00pm',
        WEDNESDAY: '11:00am - 2:00pm',
        THURSDAY: '11:00am - 8:00pm',
        FRIDAY: '11:00am - 8:00pm',
        SATURDAY: '11:00am - 8:00pm'
      }
    };

    return homeData;

  }


}
