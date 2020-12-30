import { Component, OnInit, Input } from '@angular/core';
import {CampaignService} from '../campaign.service';
import {Campaign} from '../campaign';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  campaigns;
  @Input() search: string = '';
  constructor(
    private campaignService: CampaignService
    ) { }

  ngOnInit(): void {
    this.campaignService.getAll().subscribe(data => this.campaigns = data)
  }

  delete(campaign: Campaign):void{
    this.campaignService.delete(campaign).subscribe(
      res => this.campaigns = this.campaigns.filter(c => c !== campaign)
    )
  }

  submit(){
    this.campaignService.search(this.search).subscribe(
      res => this.campaigns = res
    )
  }
}
