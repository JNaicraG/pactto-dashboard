import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { PacttosComponent } from './pages/pacttos/pacttos.component';
import { ReviewVideosComponent } from './pages/review-videos/review-videos.component';
import { SharedLinksComponent } from './pages/shared-links/shared-links.component';
import { VideoLibraryComponent } from './pages/video-library/video-library.component';

export const routes: Routes = [
    { path:'home' , component: HomeComponent },
    { path:'pacttos' , component: PacttosComponent },
    { path:'videos-to-review' , component: ReviewVideosComponent },
    { path:'library' , component: VideoLibraryComponent },
    { path:'shared-links' , component: SharedLinksComponent },
    { path:'', component: HomeComponent, pathMatch:'full' },
    { path:'**', component: NotFoundComponent },
];
