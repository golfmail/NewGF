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
  xml_l: string;
  xml_log: string;
  TBNUMTR = '-'; // 3100000041
  name_tr = 'Something'; // Something
  TBBUKRS: string;
  GJAHR: number;
  res: string;
  BTSHOW;
  BTEDIT;

  // FOR XML_LOG
  SAVELIST: any[] = []
  savelist = this.SAVELIST;
  CPUDT = ''; // DATE ex: 11.12.2017
  CPUTIME = ''; // TIME ex: 22:40:59
  LOGYEAR: Number; // YEAR NOW ex: 2017
  LOGNO: Number = 0; // Log No. // eTEST
  // XML_LOG HEADER
  LBBUKRS = '';
  TBZZPMT = '';
  LBZZPMT = '';
  LUSERID = '';
  DDGSBER = '';
  IDBLART = '';
  IDDATEA = '';
  IDDATEI = '';
  TBXBLNR = '';
  tbSearch_term = '';
  LIFNR = '';
  LBTERM = '';
  ZLSCH = '';
  TBKBLNR = '';
  LBKBLNR = '';
  SUMCOST: Number = 0;

  constructor(public dialogRef: MdDialogRef<DialogSaveComponent>, private httpService: Http ) { }

  confirmSave() {
    console.log('xml_s: ' + this.xml_s);
    const headers = new Headers({ 'Content-Type': 'application/xml' });
    const options = new RequestOptions({ headers: headers });
    console.log(this.savelist);

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
          this.TBNUMTR =  mes.substring(8); // Doc NO. (String)
          this.BTSHOW = false;
          this.BTEDIT = true;
          this.LOGNO = Number(this.GJAHR + this.TBNUMTR);
          this.saveLog(); // TEST Save Log
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

  saveLog() {
    this.getDateNow();
    this.createXMLlog(); // Gen XML LOG
    console.log('xml_log: \n' + this.xml_log); // TEST
    const headers = new Headers({ 'Content-Type': 'application/xml' });
    const options = new RequestOptions({ headers: headers });

    // รอ service log พร้อมใช้งาน
    // this.httpService.post('http://idp.yai.io:8082/rest/kb02', this.xml_log, options).subscribe(values => {
    //   console.log('return', values);
    //   if (values.ok) {
    //     const result: any = values.json();
    //     let mes = result.response.message;
    //     if (mes !== 'Fail') {
    //       console.log('Suc');
    //     } else {
    //       console.log('Fail');
    //     }
    //   } else {
    //     console.log('F');
    //     alert(values.toString());
    //   }
    // });
  }

  createXMLlog() {
    this.xml_log = '';
    this.xml_log = `<operations>\n\
    <operation>\n\
     <modelCRUD>\n\
       <tableName>log_Header</tableName>\n\
         <recordID>0</recordID>\n\
           <action>CreateUpdate</action>\n\
             <dataRow>\n\
              <field column="LOGYEAR">\n\
                <val>${this.LOGYEAR}</val>\n\
              </field>\n\
              <field column="LOGNO">\n\
                <val>${this.LOGNO}</val>\n\
              </field>\n\
              <field column="BUKRS">\n\
                <val>${this.TBBUKRS}</val>\n\
              </field>\n\
              <field column="BUKRS_NAME">\n\
                <val>${this.LBBUKRS}</val>\n\
              </field>\n\
              <field column="ZZPMT">\n\
                <val>${this.TBZZPMT}</val>\n\
              </field>\n\
              <field column="ZZPMT_NAME">\n\
                <val>${this.LBZZPMT}</val>\n\
              </field>\n\
              <field column="LUSERID">\n\
                <val>${this.LUSERID}</val>\n\
              </field>\n\
              <field column="GSBER">\n\
                <val>${this.DDGSBER}</val>\n\
              </field>\n\
              <field column="BLART">\n\
                <val>${this.IDBLART}</val>\n\
              </field>\n\
              <field column="BLDAT">\n\
                <val>${this.IDDATEA}</val>\n\
              </field>\n\
              <field column="BUDAT">\n\
                <val>${this.IDDATEI}</val>\n\
              </field>\n\
              <field column="XBLNR">\n\
                <val>${this.TBXBLNR}</val>\n\
              </field>\n\
              <field column="SEARCH_TERM">\n\
                <val>${this.tbSearch_term}</val>\n\
              </field>\n\
              <field column="LIFNR">\n\
                <val></val>\n\
              </field>\n\
              <field column="NAME1">\n\
                <val>${this.LBTERM}</val>\n\
              </field>\n\
              <field column="ZLSCH">\n\
                <val></val>\n\
              </field>\n\
              <field column="CPUDT">\n\
                <val>${this.CPUDT}</val>\n\
              </field>\n\
              <field column="CPUTIME">\n\
                <val>${this.CPUTIME}</val>\n\
              </field>\n\
              <field column="KBLNR">\n\
                <val>${this.TBKBLNR}</val>\n\
              </field>\n\
              <field column="KBLNR_name">\n\
                <val>${this.LBKBLNR}</val>\n\
              </field>\n\
              <field column="SUMCOST">\n\
                <val>${this.SUMCOST}</val>\n\
              </field>\n\
             </dataRow>\n\
         </modelCRUD>\n\
       </operation>`;
    for (let index = 0; index < this.savelist.length; index++) {
    let element = this.savelist[index];
    this.xml_log = this.xml_log + `\n\<operation>
    <modelCRUD>\n\
      <tableName>logDetail</tableName>\n\
        <recordID>0</recordID>\n\
          <action>CreateUpdate</action>\n\
          <dataRow>\n\
            <field column="LOGYEAR">\n\
              <val>${this.LOGYEAR}</val>\n\
            </field>\n\
            <field column="LOGNO">\n\
              <val>${this.LOGNO}</val>\n\
            </field>\n\
            <field column="ITEMNO">\n\
              <val>${index + 1}</val>\n\
            </field>\n\
            <field column="BUKRS">\n\
              <val>${element.TBBUKRS}</val>\n\
            </field>\n\
            <field column="BELNR">\n\
              <val>${this.TBNUMTR}</val>\n\
            </field>\n\
            <field column="GJAHR">\n\
              <val>${element.GJAHR}</val>\n\
            </field>\n\
            <field column="WRBTR">\n\
              <val>${element.TBWRBTR}</val>\n\
            </field>\n\
            <field column="HKONT">\n\
              <val>${element.TBHKONT}</val>\n\
            </field>\n\
            <field column="HKONT_name">\n\
              <val>${element.LBHKONT}</val>\n\
            </field>\n\
            <field column="KOSTL">\n\
              <val>${element.TBKOSTL}</val>\n\
            </field>\n\
            <field column="KOSTL_name">\n\
              <val>${element.LBKOSTL}</val>\n\
            </field>\n\
            <field column="FISTL">\n\
              <val>${element.TBFISTL}</val>\n\
            </field>\n\
            <field column="FISTL_name">\n\
              <val>${element.LBFISTL}</val>\n\
            </field>\n\
            <field column="FKBER">\n\
              <val>${element.TBFKBER}</val>\n\
            </field>\n\
            <field column="FKBER_name">\n\
              <val>${element.LBFKBER}</val>\n\
            </field>\n\
            <field column="PRZNR">\n\
              <val>${element.TBPRZNR}</val>\n\
            </field>\n\
            <field column="PRZNR_name">\n\
              <val>${element.LBPRZNR}</val>\n\
            </field>\n\
            <field column="ZZOBJ">\n\
              <val>${element.TBZZOBJ}</val>\n\
            </field>\n\
            <field column="ZZOBJ_name">\n\
              <val>${element.LBZZOBJ}</val>\n\
            </field>\n\
            <field column="ZZUNIT">\n\
              <val>${element.TBZZUNIT}</val>\n\
            </field>\n\
            <field column="ZZUNIT_name">\n\
              <val>${element.LBZZUNIT}</val>\n\
            </field>\n\
            <field column="ZZFIELD1">\n\
              <val>${element.TBZZLOAN}</val>\n\
            </field>\n\
            <field column="ZZFIELD1_name">\n\
              <val>${element.LBZZLOAN}</val>\n\
            </field>\n\
            <field column="VBUND">\n\
              <val>${element.TBVBUND}</val>\n\
            </field>\n\
            <field column="VBUND_name">\n\
              <val>${element.LBVBUND}</val>\n\
            </field>\n\
            <field column="SGTXT">\n\
              <val>${element.SGTXT}</val>\n\
            </field>\n\
            <field column="GEBER">\n\
              <val>${element.TBGEBER}</val>\n\
            </field>\n\
            <field column="GEBER_name">\n\
              <val>${element.LBGEBER}</val>\n\
            </field>\n\
          </dataRow>\n\
        </modelCRUD>\n\
      </operation>`;
    }
      //  console.log(this.xml_log); // TEST OUTPUT

  }

  getDateNow() {
    // this.DATENOW = new Date();
    const DN = new Date();
    this.CPUDT = DN.getDate() + '.' + (DN.getMonth() + 1 ) + '.' + DN.getFullYear();
    this.CPUTIME = DN.getHours() + ':' + DN.getMinutes() + ':' + DN.getSeconds();
    this.LOGYEAR = DN.getFullYear(); // Set Year Log
    console.log('NOW: ' + this.CPUDT + ', TIME: ' + this.CPUTIME);
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
