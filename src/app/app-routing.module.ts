import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableComponent} from "./table/table.component";
import {HomeComponent} from "./home/home.component";
import {ChartsComponent} from "./charts/charts.component";
import {MyLineChartComponent} from "./my-line-chart/my-line-chart.component";
import {PeopleComponent} from "./people/people.component";
import {PersondetailComponent} from "./persondetail/persondetail.component";
import {JauseComponent} from "./jause/jause.component";

const routes: Routes = [
  { path: 'todo', component: TableComponent},
  { path: 'chart', component: MyLineChartComponent},
  { path: 'people', component: PeopleComponent},
  { path: 'jause', component: JauseComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
