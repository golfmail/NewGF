import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Http, Response } from '@angular/http';
import { kb02 } from '../../models/kb02'; // import model เข้ามาใช้งาน
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-log-report',
  templateUrl: './log-report.component.html',
  styleUrls: ['./log-report.component.css']
})
export class LogReportComponent implements OnInit {
  observableBooks: Observable<kb02[]>;
  observableBooks2: Observable<kb02[]>;
  kb02: kb02[];
  errorMessage: String;
  docid;
  // TEST Online =>
  // url = 'http:///52.221.246.71:3000/api/getKb02Header/';
  // url2 = 'http:///52.221.246.71:3000/api/kbo2LogReport/';
  // TEST local =>
  url = 'http:///localhost:3000/api/getKb02Header/';
  url2 = 'http:///localhost:3000/api/kbo2LogReport/';
  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router) { }


  getPosts(docid): Observable<kb02[]> {
    return this.http.get(this.url + docid)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }
  getPosts2(docid): Observable<kb02[]> {
    return this.http.get(this.url2 + docid)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }
  private extractData(res: Response) {
    const body = res.json();
    return Array.of(body);
  }
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  onGetDocSearch(years, docid) {
    this.getPosts(docid);
    this.getPosts2(docid);
  }

  ngOnInit(): void {
    this.route.queryParams
      .filter(params => params.docid)
      .subscribe(params => {
        this.onGetDocSearch(params.years, params.docid); // Get Doc by Doc ID
        this.docid = params.docid;
      });
    this.observableBooks = this.getPosts( this.docid);
    this.observableBooks.subscribe(
      kb022 => this.kb02 = kb022,
      error => this.errorMessage = <any>error);

    this.observableBooks2 = this.getPosts2( this.docid);
    this.observableBooks2.subscribe(
      kb022 => this.kb02 = kb022,
      error => this.errorMessage = <any>error);


  }

}
