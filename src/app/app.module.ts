import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { NgChartsModule } from 'ng2-charts';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { PeopleComponent } from './people/people.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { PersondetailComponent } from './persondetail/persondetail.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { JauseComponent } from './jause/jause.component';
import {MatSelectModule} from "@angular/material/select";
import { MoizeitComponent } from './jause/moizeit/moizeit.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomeComponent,
    ChartsComponent,
    MyLineChartComponent,
    PeopleComponent,
    PersondetailComponent,
    JauseComponent,
    MoizeitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    NgChartsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
