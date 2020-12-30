import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';

import {IconsModule} from './icons/icons.module';
import { AppRoutingModule } from './app-routing.module';
import { CampaignRoutingModule } from './campaign/campaign-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ChartsModule} from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';

import {CampaignModule} from './campaign/campaign.module';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './campaign/in-memory-data.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

import {SidebarModule} from 'ng-sidebar';
@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    CampaignRoutingModule,
    CampaignModule,
    NgbModule,
    IconsModule,
    ChartsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
