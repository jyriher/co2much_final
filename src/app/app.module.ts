import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { DirectionsMapDirective } from './directions.directive';
import {MapinfoComponent} from './mapinfo/mapinfo.component';
import {NavigationbarComponent} from './navigationbar/navigationbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { routes } from './app.router';
import { PageinfoComponent } from './pageinfo/pageinfo.component';
import { GoogleService } from './services/google.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        DirectionsMapDirective,
        MapinfoComponent,
        NavigationbarComponent,
        DirectionsMapDirective,
        HomepageComponent,
        PageinfoComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBXbailwqmTQL47FL9BsaLDkaViXvwpvL0'
        }),
        routes,
        HttpClientModule

    ],
    providers: [GoogleService],
    bootstrap: [AppComponent]
})
export class AppModule { }
