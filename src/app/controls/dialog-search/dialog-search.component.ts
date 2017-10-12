import { Component, OnInit , Inject} from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Kb021Component } from 'app/kb02/kb02-1/kb02-1.component';
import { TableList } from 'app/kb02/table-list-view';
import { Http, Headers, RequestOptions} from '@angular/http';

let RESLIST: any[] = [];

@Component({
  selector: 'app-dialog-search',
  templateUrl: './dialog-search.component.html',
  styleUrls: ['./dialog-search.component.css']
})
export class DialogSearchComponent implements OnInit {
  name_t: string;
  size_t: string;
  code_t: string;
  year_t: String;
  label_select  = 'เลือก';
  label_name    = 'ชื่อ';
  label_detail  = 'คำอธิบาย';
  resultXML: string;
  xml_s: string;
  result_s: any[];
  reslist = RESLIST;
  SearchList: TableList;
  xmlTBZZPMT = `<table xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                  <row>
                    <id>1000000</id>
                    <Value>000000300200005</Value>
                    <Name>สำนักบริหารกลาง</Name>
                    <description>สบก.</description>
                  </row>
                </table>`;
  xmlTBFISTL = `<table xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <row>
                  <id>100</id>
                  <Value>0300210101110000</Value>
                  <Name>ครุภัณฑ์ต่ำกว่า 1 ล</Name>
                  <description>ครุภัณฑ์ต่ำกว่า 1 ล</description>
                </row>
                <row>
                  <id>101</id>
                  <Value>0300210101000000</Value>
                  <Name>รายการงบประจำ</Name>
                  <description>รายการงบประจำ</description>
                </row>
                <row>
                  <id>101</id>
                  <Value>0300210101110001</Value>
                  <Name>โต๊ะทำงานระดับ 3-6</Name>
                  <description>โต๊ะทำงานระดับ 3-6</description>
                </row>
                <row>
                  <id>101</id>
                  <Value>0300210101110002</Value>
                  <Name>เครื่องโทรศัพท์</Name>
                  <description>เครื่องโทรศัพท์</description>
                </row>
                <row>
                  <id>101</id>
                  <Value>0300210101110003</Value>
                  <Name>เครื่องถ่ายเอกสารระบงบประจำ</Name>
                  <description>เครื่องถ่ายเอกสารระบ</description>
                </row>
                <row>
                  <id>101</id>
                  <Value>0300210101110007</Value>
                  <Name>เครื่องกรองน้ำ</Name>
                  <description>เครื่องกรองน้ำ</description>
                </row>
                <row>
                  <id>101</id>
                  <Value>0300210101110022</Value>
                  <Name>รถนั่งส่วนกลาง</Name>
                  <description>รถนั่งส่วนกลาง</description>
                </row>
                </table>`;
  xmlTBPRZNR = `<table xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <row>
                  <id>1000343</id>
                  <Value>1000L0633000</Value>
                  <Name>การติดตาม เร่งรัด การดำเนินงาน</Name>
                  <description>การติดตาม เร่งรัด การดำเนินงาน</description>
                </row>
                <row>
                  <id>1000344</id>
                  <Value>1000L0634000</Value>
                  <Name>การบริหารจัดการและพัฒนาเทคโนโล</Name>
                  <description>การบริหารจัดการและพัฒนาเทคโนโล</description>
                </row>
		            <row>
                  <id>1000345</id>
                  <Value>1000K1904000</Value>
                  <Name>ฝึกอบรม เผยแพร่แล...</Name>
                  <description>ฝึกอบรม เผยแพร่แล...</description>
                </row>
		            <row>
                  <id>1000346</id>
                  <Value>1000K1901000</Value>
                  <Name>ส่งเสริม เผยแพร่แ...</Name>
                  <description>ส่งเสริม เผยแพร่แ...</description>
                </row>
                </table>`;
   xmlTBKOSTL = `<table xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                  <row>
                    <id>101</id>
                    <Value>0300200001</Value>
                    <Name>กกม.</Name>
                    <description>กลุ่มงานกฎหมาย</description>
                  </row>
                  <row>
                    <id>103</id>
                    <Value>0300200003</Value>
                    <Name>กปป.</Name>
                    <description>กลุ่มงานป้องปรามการเงินนอกระบบ</description>
                  </row>
                  <row>
                    <id>104</id>
                    <Value>0300200004</Value>
                    <Name>กตน.</Name>
                    <description>กลุ่มตรวจสอบภายใน</description>
                  </row>
                  <row>
                    <id>105</id>
                    <Value>0300200005</Value>
                    <Name>สบก.</Name>
                    <description>สำนักบริหารกลาง</description>
                  </row>
                  <row>
                    <id>107</id>
                    <Value>0300200007</Value>
                    <Name>สตป.</Name>
                    <description>สำนักตรวจสอบและประเมินผล</description>
                  </row>
                  <row>
                    <id>100</id>
                    <Value>0300200000</Value>
                    <Name>สปกค.</Name>
                    <description>สำหรับทดสอบสินทรัพย์</description>
                  </row>
                </table>`;
  xmlTBFKBER = `<table xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <row>
                  <id>1000084</id>
                  <Value>030021000L0633</Value>
                  <Name>การติดตาม เร่งรัด การดำเน</Name>
                  <description>การติดตาม เร่งรัด การดำเน</description>
                </row>
                <row>
                  <id>030021000L0634</id>
                  <Value>030021000L0634</Value>
                  <Name>การบริหารจัดการและพัฒนา</Name>
                  <description>การบริหารจัดการและพัฒนา</description>
                </row>
		            <row>
                  <id>P1000</id>
                  <Value>P1000</Value>
                  <Name>ส่วนกลาง</Name>
                  <description>ส่วนกลาง</description>
                </row>
	            	<row>
                  <id>03002100000000</id>
                  <Value>03002100000000</Value>
                  <Name>กิจกรรม สำหรับการ...</Name>
                  <description>กิจกรรม สำหรับการ...</description>
                </row>
                </table>`;

  // เพิ่มรหัสบัญชีแยกประเภท
  xmlTBHKONT = `<table xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <row>
                  <id>1000002</id>
                  <Value>53000</Value>
                  <Name>ค่าใช้จ่ายค่าที่ปรึกษา</Name>
                  <description>ค่าใช้จ่ายค่าที่ปรึกษา</description>
                </row>
                <row>
                  <id>51800</id>
                  <Value>51800</Value>
                  <Name>ค่าวัสดุ</Name>
                  <description>ค่าวัสดุ</description>
                </row>
                <row>
                  <id>52000</id>
                  <Value>52000</Value>
                  <Name>ค่าซ่อมแซมและค่าบำรุงรักษา</Name>
                  <description>ค่าซ่อมแซมและค่าบำรุงรักษา</description>
                </row>
                <row>
                  <id>51200</id>
                  <Value>51200</Value>
                  <Name>ค/จเหมาบริการ-ภายนอก</Name>
                  <description>ค/จเหมาบริการ-ภายนอก</description>
                </row>
                <row>
                  <id>57000</id>
                  <Value>57000</Value>
                  <Name>ค่าใช้จ่ายบุคลากรอื่น</Name>
                  <description>ค่าใช้จ่ายบุคลากรอื่น</description>
                </row>
                <row>
                  <id>54000</id>
                  <Value>54000</Value>
                  <Name>ขนส่งสินค้า</Name>
                  <description>ขนส่งสินค้า</description>
                </row>
                </table>`;
  xmlTBGEBER = `<table xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                  <row>
                    <id>6011220</id>
                    <Value>6011220</Value>
                    <Name>ค่าใช้สอย /งบสรก.</Name>
                    <description>ค่าใช้สอย /งบสรก.</description>
                  </row>
                  <row>
                    <id>6011230</id>
                    <Value>6011230</Value>
                    <Name>ค่าวัสดุ /งบสรก.</Name>
                    <description>ค่าวัสดุ /งบสรก.</description>
                  </row>
                  <row>
                    <id>6011240</id>
                    <Value>6011240</Value>
                    <Name>ค่าสาธารณูปโภค /งบสร</Name>
                    <description>ค่าสาธารณูปโภค /งบสร</description>
                  </row>
                  <row>
                    <id>6011500</id>
                    <Value>6011500</Value>
                    <Name>งบรายจ่ายอื่น/งบสรก.</Name>
                    <description>งบรายจ่ายอื่น/งบสรก.</description>
                  </row>
                  <row>
                    <id>6010110</id>
                    <Value>6010110</Value>
                    <Name>เงินเดือน /งบกลาง/งบสรก.</Name>
                    <description>เงินเดือน /งบกลาง/งบสรก.</description>
                  </row>
                  <row>
                    <id>6010230</id>
                    <Value>6010230</Value>
                    <Name>ค่าวัสดุ /งบกลาง</Name>
                    <description>ค่าวัสดุ /งบกลาง</description>
                  </row>
                </table>`;

  constructor( public dialogRef: MdDialogRef<DialogSearchComponent>, private httpService: Http) {}

  searchitem() {
    document.getElementById('progress-bar').style.display = 'block';
    console.log('S: ' + this.code_t);
    console.log('N: ' + this.name_t);
    console.log('Y: ' + this.year_t);
    switch (this.code_t) {
      case 'TBKOSTL':
        this.resourcesList(this.name_t);
        console.log('C: ' + this.code_t);
        break;
      case 'TBFKBER': // รหัสกิจกรรมหหลัก
        this.createdXml();
        this.resourcesList(this.name_t);
        console.log('C: ' + this.code_t);
        break;
      case 'TBFISTL': // รหัสงบประมาณ
        // this.createdXml();
        this.resourcesList(this.name_t);
        console.log('C: ' + this.code_t);
        break;
      case 'TBZZPMT':
        // this.createdXml();
        this.resourcesList(this.name_t);
        console.log('C: ' + this.code_t);
        break;
      case 'TBPRZNR':
        this.resourcesList(this.name_t);
        console.log('C: ' + this.code_t);
        break;
      case 'TBZZOBJ':
        this.resourcesList(this.name_t);
        console.log('C: ' + this.code_t);
        break;
      case 'TBZZLOAN':
        this.resourcesList(this.name_t);
        console.log('C: ' + this.code_t);
        break;
      case 'TBHKONT':
        this.resourcesList(this.name_t);
        console.log('C: ' + this.code_t);
        break;
      case 'TBGEBER':
        this.resourcesList(this.name_t);
        break;
    }
  }

  resourcesList(name_r) {
   console.log('L: ' + this.code_t);
    switch (this.code_t) {
      case 'TBKOSTL':
        this.gatherItem(this.xmlTBKOSTL); // for TEST
        this.displayItem(name_r);
        break;
      case 'TBFKBER': // รหัสกิจกรรมหลัก
        // this.sentItem(this.xml_s, name_r); // TEST-SERVICE
        // this.getItem(this.result_s);
        this.gatherItem(this.xmlTBFKBER); // for TEST
        this.displayItem(name_r);
        break;
      case 'TBFISTL': // รหัสงบประมาณ
        // this.sentItem(xml_s);
        // this.gatherItem(this.xml_r);
        this.gatherItem(this.xmlTBFISTL); // for TEST
        this.displayItem(name_r);
        break;
      case 'TBZZPMT':
        // this.sentItem(xml_s);
        // this.gatherItem(this.xml_r);
        this.gatherItem(this.xmlTBZZPMT); // for TEST
        this.displayItem(name_r);
        break;
      case 'TBPRZNR':
        this.gatherItem(this.xmlTBPRZNR); // for TEST
        this.displayItem(name_r);
        break;
      case 'TBZZOBJ':
        this.gatherItem(this.xmlTBKOSTL); // for TEST
        this.displayItem(name_r);
        break;
      case 'TBZZLOAN':
        this.gatherItem(this.xmlTBKOSTL); // for TEST
        this.displayItem(name_r);
        break;
      case 'TBHKONT':
        this.gatherItem(this.xmlTBHKONT); // for TEST
        this.displayItem(name_r);
        break;
      case 'TBGEBER': // แหล่งของเงิน พิเศษ
        this.checkYearGEBER();
        this.displayItem(name_r);
        break;
    }
  }

  // แหล่งของเงิน only 2560
  checkYearGEBER () {
    console.log(this.year_t);
    if (this.year_t == '2560') {
      console.log('T-Y');
      this.gatherItem(this.xmlTBGEBER);
    } else {
      this.gatherItem('');
    }
  }

  createdXml() {
    this.xml_s = `{
    "tableName": "th_fund",
    "idField": "th_fund_id",
    "nameField": "name",
    "valueField": "value",
    "adClientId": 1000000,
    "adOrgId": 0
    }`;
  }
  sentItem(xml: string, name_r) {
    console.log('Sent data to Serivce');
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    this.httpService.post('http://idp.yai.io:8082/rest/lookup', xml, options).subscribe(values => {
      console.log('return', values);
      if (values.ok) {
        const result: any = values.json();
        console.log(result.results);
          this.result_s = result.results; // result
          // alert(`ได้รับข้อมูล  ${this.result_s}`);
          // console.log('arr:' + this.result_s);
          RESLIST = this.result_s;
          this.displayItem(name_r);
      } else {
        alert(values.toString());
      }
    });
  }

  getItem(res) {
    RESLIST = this.result_s;
    console.log('RES' + RESLIST);
  }

  gatherItem(xml) {
      RESLIST = [];
      this.resultXML = xml;
      console.log(xml);
      let x, i, txt, value, name, description;
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(this.resultXML, 'text/xml');
  //    xmlDoc = xml.responseXML;
      txt = '';
      x             = xmlDoc.getElementsByTagName('id');
      value         = xmlDoc.getElementsByTagName('Value');
      name          = xmlDoc.getElementsByTagName('Name');
      description   = xmlDoc.getElementsByTagName('description');
      for (i = 0; i < x.length; i++) {
//          txt += x[i].childNodes[0].nodeValue + '<br>'; // TEST
        RESLIST.push({
          id:    x[i].innerHTML,
          Value:        value[i].innerHTML,
          Name:         name[i].innerHTML,
          description:  description[i].innerHTML
        });
      }
  //    document.getElementById('demo').innerHTML = txt; // TEST
    console.log(RESLIST);
  }

  displayItem(name_d) {
    let table: HTMLTableElement = <HTMLTableElement> document.getElementById('myTable');
    let rowCount = table.rows.length;
    console.log('rowCount: ' + rowCount); // TEST
    while (table.rows.length > 0) {
      table.deleteRow(0);
      console.log('Del row');
    }
    console.log('rowCount Af: ' + table.rows.length); // TEST
// Add the header row.
    let customers = new Array();
    customers.push(['เลือก ', name_d, 'ชื่อ']);
    // customers.push(['เลือก ', name_d, 'ชื่อ', 'คำอธิบาย']); // TEST
    var columnCount = customers[0].length;
    let rowx = table.insertRow(-1);
    for (let i = 0; i < columnCount; i++) {
        let headerCell = document.createElement('TH');
        headerCell.innerHTML = customers[0][i];
        rowx.appendChild(headerCell);
    }

    let row = table.insertRow(-1);
    let cell1, cell2, cell3, cell4;
    let dialogRef = this.dialogRef;
    let confirmSelection = this.confirmSelection;


    // console.log(RESLIST.length);
    // console.log(RESLIST[1].results.Name);
    for (let i = 0; i < RESLIST.length; i++) {
      console.log('innerHTML..');
      row = table.insertRow(-1);
      cell1 = row.insertCell(0).innerHTML = '<a style="cursor:pointer" class="btn" id="button' + i + '">เลือก</a>';
      cell2 = row.insertCell(1).innerHTML = RESLIST[i].Value;
      cell3 = row.insertCell(2).innerHTML = RESLIST[i].Name;
      // cell4 = row.insertCell(3).innerHTML = RESLIST[i].Name;
      document.getElementById('button' + (i)).addEventListener('click',
      function(){modifyText( RESLIST[i].id, RESLIST[i].Value, RESLIST[i].Name)}, false);

    }
    document.getElementById('progress-bar').style.display = 'none';
    function modifyText(new_id, new_text, new_name) {
      dialogRef.close({id: new_id, value: new_text, name: new_name});
    }
  }

  onSelect(save: TableList, i): void {
  console.log('TEST onSelect');
  }

  confirmSelection(valueX): void {
    this.size_t = '21';
    console.log(this.size_t);
    this.dialogRef.close();
//    this.dialogRef.close(this.size_t);
  }

  ngOnInit() {
    // this.searchitem();
  }

}
