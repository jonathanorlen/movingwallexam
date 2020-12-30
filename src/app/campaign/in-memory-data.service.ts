import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const campaigns = [
      { id: 1, name: 'History', status:'LIVE', created_by: 'Sanchit',created_date:'2020-02-02', cost: 1},
      { id: 2, name: 'Cravy', status:'DRAFT', created_by: 'Sanchit', created_date:'2020-02-02', cost: 1},
      { id: 3, name: 'Sanchit', status:'INACTIVE', created_by: 'Sanchit', created_date:'2020-02-02', cost: 1},
      { id: 4, name: 'History', status:'LIVE', created_by: 'Sanchit', created_date:'2020-02-02', cost: 1},
      { id: 5, name: 'Test 1', status:'INACTIVE', created_by: 'Sanchit', created_date:'2020-02-02', cost: 1},
      { id: 6, name: 'Test 2', status:'INACTIVE', created_by: 'Sanchit', created_date:'2020-02-02', cost: 1},
      { id: 7, name: 'Test 3', status:'DRAFT', created_by: 'Sanchit', created_date:'2020-02-02', cost: 1},
      { id: 8, name: 'Test 4', status:'LIVE', created_by: 'Sanchit', created_date:'2020-02-02', cost: 1},
    ];

    return {campaigns}
  }
  constructor() { }
}
