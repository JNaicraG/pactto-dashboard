import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { PacttosComponent } from './pages/pacttos/pacttos.component';

export const routes: Routes = [
    { path:'home' , component: HomeComponent },
    { path:'pacttos' , component: PacttosComponent },
    { path:'', component: HomeComponent, pathMatch:'full' },
    { path:'**', component: NotFoundComponent },
];
