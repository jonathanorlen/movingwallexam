import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Campaign} from './campaign';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private url = 'api/campaigns';

  private log(message: string){
    // this.messageService.add(`HeroService: ${message}`)
  }

  httpOptions = {
    headers: new HttpHeaders({ 'ContentType': 'application/json'})
  }

  constructor(
    private http:HttpClient,
    private toastr: ToastrService
  ) { }

  getAll(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.url)
    .pipe(
      tap(_ => this.log('fetched Campaign')),
      catchError(this.handleError<Campaign[]>('getCampaign'))
    )
  }

  getOne(id: number): Observable<any>{
    const url = `${this.url}/${id}`
    return this.http.get<Campaign>(url).pipe(
      tap(_ => this.log(`fetched campaign id = ${id}`)),
      catchError(this.handleError<Campaign>(`get id = ${id}`))
    )
  }

  create(campaign): Observable<Campaign> {
    return this.http.post<Campaign>(this.url, campaign, this.httpOptions).pipe(
      tap((res: Campaign) => this.handleSuccess(`Added campaign w/ id=${res.id} succesfuly`)),
      catchError(this.handleError<Campaign>('addCampaign'))
    )
  }

  update(campaign): Observable<any> {
    return this.http.post<Campaign>(this.url, campaign, this.httpOptions).pipe(
      tap(_ => this.handleSuccess(`Edit campaign w/ id=${campaign.id} succesfuly`)),
      catchError(this.handleError<Campaign>('updateCampaign'))
    )
  }

  delete(campaign: Campaign | number): Observable<Campaign> {
    const id = typeof campaign === 'number' ? campaign : campaign.id
    const url = `${this.url}/${id};`

    return this.http.delete<Campaign>(url, this.httpOptions).pipe(
      tap(_ => this.handleSuccess(`Delete campaign succesfuly`)),
      catchError(this.handleError<Campaign>('delete campaign'))
    )
  }

  search(search) {
    if (!search) {
      // if search null return null
      return this.http.get<Campaign[]>(this.url).pipe(
      tap(data => console.log('no search')),
        catchError(this.handleError<Campaign>('Search campaign'))
      );
    }

    return this.http.get<Campaign[]>(`${this.url}/?name=${search}`, this.httpOptions).pipe(
      tap(data => data.length ? 
        console.log('found'):
        console.log('not found')
      ),
      catchError(this.handleError<Campaign>('Search campaign'))
    )
  }

  private handleSuccess(message: string){
    this.toastr.success(message, 'Success', {
        timeOut: 3000
    })
  }

  private handleError<T>(operation = 'operation',result?: T){
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      this.toastr.error(error, 'Service Error', {
        timeOut: 3000
      })

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
