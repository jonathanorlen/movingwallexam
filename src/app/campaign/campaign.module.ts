import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IconsModule} from '../icons/icons.module';
import { CampaignRoutingModule } from './campaign-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [IndexComponent, CreateComponent, EditComponent],
  imports: [
    BrowserModule,
    CommonModule,
    CampaignRoutingModule,
    FormsModule,
    IconsModule
  ]
})
export class CampaignModule { }
