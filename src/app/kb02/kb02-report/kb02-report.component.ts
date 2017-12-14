import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kb02-report',
  templateUrl: './kb02-report.component.html',
  styleUrls: ['./kb02-report.component.css']
})
export class Kb02ReportComponent implements OnInit {

  // SET: Header | Decsription
  headerText = 'รายงานขอเบิกเงินงบประมาณที่ไม่อ้างใบสั่งซื้อฯ (ขบ. 02)';
  description = 'ค้นหารายงานขอเบิกเงินงบประมาณที่ไม่อ้างใบสั่งซื้อฯ';

  RADIO_TYPE = 'user';
  DATE_TYPE = 'd';
  dateList: any[] = [];
  T_DATE = new Date();
  S_DATE;
  E_DATE;

  constructor() { }

  onSearch() {
    const type = this.RADIO_TYPE;
    const dayType = this.DATE_TYPE;
    if (type === 'user') {
      this.coverDate(dayType);
      let link = './menureport?type=' + dayType + '&' + 'start=' + this.S_DATE + '&' + 'end=' + this.E_DATE;
          link = link + '&username=' + '030020000510';
      window.open(link);
    } else if (type === 'zzpmt') {
      this.coverDate(dayType);
      let link = './menureport-zzpmt?type=' + dayType + '&' + 'start=' + this.S_DATE + '&' + 'end=' + this.E_DATE;
          link = link + '&zzpmt=' + '0300200005';
      window.open(link);
    }
  }

  coverDate(dayType) {
    // Cover date for type | cover date 2 digit
    if (dayType === 'd') {
      // tslint:disable-next-line:max-line-length
      this.S_DATE = ('0' + this.T_DATE.getDate()).slice(-2) + '.' + ('0' + (this.T_DATE.getMonth() + 1)).slice(-2) + '.' + this.T_DATE.getFullYear();
      this.E_DATE = ('0' + this.T_DATE.getDate()).slice(-2) + '.' + ('0' + (this.T_DATE.getMonth() + 1)).slice(-2) + '.' + this.T_DATE.getFullYear();
    } else if (dayType === 'w') {
      const sun = this.getSunday(this.T_DATE);
      const sat = this.getSaturday(this.T_DATE);
      this.S_DATE = ('0' + sun.getDate()).slice(-2) + '.' + ('0' + (sun.getMonth() + 1)).slice(-2) + '.' + sun.getFullYear();
      this.E_DATE = ('0' + sat.getDate()).slice(-2) + '.' + ('0' + (sat.getMonth() + 1)).slice(-2) + '.' + sat.getFullYear();
    } else if (dayType === 'm') {
      const y = this.T_DATE.getFullYear(), m = this.T_DATE.getMonth();
      const firstDay = new Date(y, m, 1).getDate();
      const lastDay = new Date(y, m + 1, 0).getDate();
      this.S_DATE = ('0' + firstDay).slice(-2) + '.' + ('0' + (this.T_DATE.getMonth() + 1)).slice(-2) + '.' + this.T_DATE.getFullYear();
      this.E_DATE = ('0' + lastDay).slice(-2) + '.' + ('0' + (this.T_DATE.getMonth() + 1)).slice(-2) + '.' + this.T_DATE.getFullYear();
    }
    // console.log(this.S_DATE, this.E_DATE);
  }

  getSunday(d) {
    d = new Date(d);
    const day = d.getDay(),
          diff = d.getDate() - day; // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  getSaturday(d) {
    d = new Date(d);
    const day = d.getDay(),
          diff = d.getDate() - day + (day === 6 ? 6 : 6); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  ngOnInit() {
    this.dateList = [
      {
        DATE: 'รายวัน',
        TYPE: 'd'
      },
      {
        DATE: 'รายสัปดาห์',
        TYPE: 'w'
      },
      {
        DATE: 'รายเดือน',
        TYPE: 'm'
      },
    ];
  }

}
