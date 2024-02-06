import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  }
  ,
  {
    path:'about-me',component:AboutMeComponent
  }
  ,
  {
    path:'certificates',component:CertificatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
