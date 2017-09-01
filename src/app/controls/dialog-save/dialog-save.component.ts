import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Kb021Component } from 'app/kb02/kb02-1/kb02-1.component';
import { Http, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-dialog-save',
  templateUrl: './dialog-save.component.html',
  styleUrls: ['./dialog-save.component.css']
})
export class DialogSaveComponent implements OnInit {
  xml_s: string;
  TBNUMTR = '-'; // 3100000041
  name_tr = 'Something'; // Something
  TBBUKRS: string;
  FCYEAR: number;
  res: string;
  BTSHOW;
  BTEDIT;

  constructor(public dialogRef: MdDialogRef<DialogSaveComponent>, private httpService: Http ) { }

  confirmSave() {
    console.log('xml_s: ' + this.xml_s);
    const headers = new Headers({ 'Content-Type': 'application/xml' });
    const options = new RequestOptions({ headers: headers });

    this.httpService.post('http://idp.yai.io:8082/rest/kb02', this.xml_s, options).subscribe(values => {
      console.log('return', values);
      if (values.ok) {
        const result: any = values.json();
        let mes = result.response.message;
        this.TBNUMTR = '';
        // mes = 'Doc No: 10000195';
        // let code = result.response.code;
        // alert(`ผลการบันทึก  ${mes}`);
        // console.log(result);
        // console.log('details: ', result.response.details);
        if (mes !== 'Fail') {
          console.log('Suc');
          this.showSuccess('สำเร็จ');
          this.TBNUMTR =  mes.substring(8);
          this.BTSHOW = false;
          this.BTEDIT = true;
        } else {
          console.log('Fail');
          this.showSuccess('ไม่สำเร็จ');
          this.BTSHOW = true;
          this.BTEDIT = false;
        }
      } else {
        console.log('F');
        alert(values.toString());
      }
    });
  }

  showSuccess(result) {
    this.res = result;
    document.getElementById('headerShow').innerText = 'ผลการบันทึกรายการ';
    document.getElementById('success').style.display = 'none';
    document.getElementById('showSuccess').style.display = 'block';
  };

  showDetail() {
    console.log('Show Detail');
    this.dialogRef.close({value: this.TBNUMTR, name: this.name_tr});
  }

  ngOnInit() {
  }

}
