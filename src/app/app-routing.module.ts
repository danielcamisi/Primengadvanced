import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HomepageComponentComponent } from './homepage-component/homepage-component.component';
import { RegisterComponent } from './body/register/register.component';
import { OfComponentComponent } from './of-component/of-component.component';

const routes: Routes = [

  {path: 'login', component: BodyComponent},
  {path: 'home', component: HomepageComponentComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'of', component: OfComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
