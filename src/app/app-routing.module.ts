import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyAdressesComponent } from './my-adresses/my-adresses.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', pathMatch: 'full',component: HomeComponent, },
{ path: 'MyProfile', pathMatch: 'full', component: MyProfileComponent,},
{ path: 'MyAddresses', pathMatch: 'full', component: MyAdressesComponent,}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
