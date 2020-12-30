import { Component, OnInit, Input} from '@angular/core';
import {CampaignService} from '../campaign.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Campaign} from '../campaign';
import {Location} from '@angular/common'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() form;
  constructor(
    public campaignService: CampaignService,
    private router: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.router.snapshot.paramMap.get('id');
    this.campaignService.getOne(id)
    .subscribe(res => this.form = res)
  }

  save(): void{
    this.campaignService.update(this.form)
    .subscribe(() => this.goBack())
  }

  goBack(){
    this.location.back()
  }
}
