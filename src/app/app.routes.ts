import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path:'home' , component: HomeComponent },
    { path:'', component: HomeComponent },
    { 
        path:'**', 
        component: NotFoundComponent,
    },
];
