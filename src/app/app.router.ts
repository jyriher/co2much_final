import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MapinfoComponent } from './mapinfo/mapinfo.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageinfoComponent } from './pageinfo/pageinfo.component';

export const router: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomepageComponent },
    {path: 'map', component: MapinfoComponent },
    {path: 'info', component: PageinfoComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);