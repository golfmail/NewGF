import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Http, Response } from '@angular/http';
import { kb02 } from '../../models/kb02'; //import model เข้ามาใช้งาน
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import { NgPipesModule } from 'ngx-pipes';
@Component({
  selector: 'app-menu-report-zzpmt',
  templateUrl: './menu-report-zzpmt.component.html',
  styleUrls: ['./menu-report-zzpmt.component.css']
})
export class MenuReportZzpmtComponent implements OnInit {

  observableBooks: Observable<kb02[]>;
  observableBooks2: Observable<kb02[]>;
  observableBooks3: Observable<kb02[]>;
  kb02: kb02[];
  errorMessage: String;
  docid;
  start;
  ss;
  ee
  end;
  startyear;
  endyear;
  type;
  zzpmt;
  // url = "http://localhost:3000/api/getKb02SumHeadCPUDT2CPUDT_ZZPMT/";
  // urlcount = "http://localhost:3000/api/getKb02CountalldocumentZzpmt/";
  url = './api/getKb02SumHeadCPUDT2CPUDT_ZZPMT/';
  urlcount = './api/getKb02CountalldocumentZzpmt/';
  date = new Date();
  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router) { }



    getPosts(start, end,startyear,endyear,zzpmt): Observable<kb02[]> {
      return this.http.get(this.url + start + '/' + end +'/'+ zzpmt)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
  
    }
  
    getCount(start, end,zzpmt): Observable<kb02[]> {
      return this.http.get(this.urlcount + start + '/' + end +'/'+ zzpmt)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
    }
    private extractData(res: Response) {
      let body = res.json();
      return Array.of(body);
    }
    private handleErrorObservable(error: Response | any) {
      console.error(error.message || error);
      return Observable.throw(error.message || error);
    }
    onGetDocSearch(start, end,startyear,endyear,type,zzpmt) {
      this.getPosts(start, end,startyear,endyear,zzpmt);
    };
  
    ngOnInit(): void {
      this.route.queryParams
        .filter(params => params.start)
        .subscribe(params => {
          this.onGetDocSearch(params.start, params.end,params.zzpmt,this.startyear,this.endyear,this.type); // Get Doc by Doc ID
          this.start = params.start;
          this.end = params.end;
          this.zzpmt = params.zzpmt;
          this.type = params.type;
          this.ss = this.start.slice(6, 10);
          this.startyear =parseInt(this.ss)+543 ;
          
          this.ee = this.start.slice(6, 10);
          this.endyear =parseInt(this.ee)+543 ;
        });
      this.observableBooks = this.getPosts(this.start, this.end,this.startyear,this.endyear,this.zzpmt);
      this.observableBooks.subscribe(
        kb022 => this.kb02 = kb022,
        error => this.errorMessage = <any>error);
 
  
        this.observableBooks3 = this.getCount(this.start, this.end,this.zzpmt);
        this.observableBooks3.subscribe(
          kb022 => this.kb02 = kb022,
          error => this.errorMessage = <any>error);
  
    }
  
  
  }