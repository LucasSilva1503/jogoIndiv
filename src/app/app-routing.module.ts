import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CriarComponent } from './components/criar/criar.component';
import { LutarComponent } from './components/lutar/lutar.component';
import { TreinarComponent } from './components/treinar/treinar.component';


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "criar", component: CriarComponent},
  {path: "lutar", component: LutarComponent},
  {path: "treinar", component: TreinarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
