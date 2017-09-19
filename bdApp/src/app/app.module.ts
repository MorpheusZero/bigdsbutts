/*
 Angular Vendor Imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*
 3rd Party Imports
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdTooltipModule
} from '@angular/material';

/**
 * Import Components
 */
import { AppComponent } from './app.component';
import {
          NavigationBarComponent,
          HomePageComponent,
          MenuPageComponent,
} from './components';

/**
 * Import Services
 */
import { AppService } from './app.service';

/**
 * Routing
 */
const appRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'menu',
    component: MenuPageComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomePageComponent,
    MenuPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdTooltipModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
