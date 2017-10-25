import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-web',
  templateUrl: './check-web.component.html',
  styleUrls: ['./check-web.component.css']
})
export class CheckWebComponent implements OnInit {

  LINK = '';
  BROWSER = '';
  constructor() { }

  checkWeb() {
    const mybrowser = navigator.userAgent;
    console.log(mybrowser);
    if (mybrowser.indexOf('Firefox') > 0) {
      this.BROWSER = 'Firefox';
      this.LINK = 'https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/?src=userprofile';
    }
    if (mybrowser.indexOf('Chrome') > 0) {
      this.BROWSER = 'Chrome';
      this.LINK = 'https://chrome.google.com/webstore/detail/nlfbmbojpeacfghkpbjhddihlkkiljbi?utm_source=chrome-app-launcher-info-dialog';
    }
    if (mybrowser.indexOf('OPR') > 0) {
      this.BROWSER = 'Opera';
      this.LINK = 'https://addons.opera.com/extensions/details/app_id/ficdjbpldagoalnkdoponeaajijkncih';
    }
  }

  redirectTo() {
    window.open(this.LINK, '_blank');
  }

  ngOnInit() {
    this.checkWeb();
  }

}
