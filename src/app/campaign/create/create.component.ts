import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {CampaignService} from '../campaign.service';
import {Campaign} from '../campaign';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Input() form = {
    name: '',
    status: '',
    cost: 0,
    created_date: this.getDate(),
    created_by: 'Orlen'
  }

  constructor(
    public campaignService: CampaignService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.campaignService.create(this.form)
    .subscribe(res => {
         console.log('Campaign Succesfull created');
         this.router.navigateByUrl('campaign');
    })
  }

  getDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

}
