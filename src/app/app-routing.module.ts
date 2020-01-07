import { NgModule, Component, ɵLocaleDataIndex } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { LoginComponent } from './User/login/login.component';
import { MapsComponent } from './Initial/maps/maps.component';
import { NotfoundComponent } from './Default/notfound/notfound.component';



const routes: Routes = [
  { path: '', component: NotfoundComponent, pathMatch: 'full'},
  { path: 'initialmap', component: MapsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: SignUpComponent },
  { path: 'login', component: LoginComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
