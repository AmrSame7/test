import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Img1Component } from './img1/img1.component';
import { Img2Component } from './img2/img2.component';
import { Img3Component } from './img3/img3.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full' ,title:'Home'},
  {path:'home', component:HomeComponent ,title:'Home'},
  {path:'about', component:AboutComponent ,title:'about'},
{path:'portfolio', component:PortfolioComponent ,title:'Portfolio',
children:[
{path:'img1',component:Img1Component},
{path:'img2',component:Img2Component},
{path:'img3',component:Img3Component}
]} ,
{path:'contact', component:ContactComponent ,title:'Contact'},
{path:'**', component:NotfoundComponent, title:"404"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
