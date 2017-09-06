import { Component, OnInit , Inject} from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Kb021Component } from 'app/kb02/kb02-1/kb02-1.component';
import { TableList } from 'app/kb02/table-list-view';
import { Http, Headers, RequestOptions} from '@angular/http';

let RESLIST: any[] = []

@Component({
  selector: 'app-dialog-search',
  templateUrl: './dialog-search.component.html',
  styleUrls: ['./dialog-search.component.css']
})
export class DialogSearchComponent implements OnInit {
  name_t: string;
  size_t: string;
  code_t: string;
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
                  <Value>300200005</Value>
                  <Name>สำนักบริหารกลาง</Name>
                  <description>สบก.</description>
                </row>
                <row>
                  <id>11</id>
                  <Value>HQ</Value>
                  <Name>HQ</Name>
                  <description>GardenWorld HQ!</description>
                </row>
                <row>
                  <id>0</id>
                  <Value>0</Value>
                  <Name>*</Name>
                  <description>All Organizations</description>
                </row>
                <row>
                  <id>1000001</id>
                  <Value>300200006</Value>
                  <Name>สำนักปลัดกระทรวงการคลัง</Name>
                  <description>สปกค</description>
                </row>
                </table>`;
  xmlTBFISTL = `<table xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <row>
                  <id>1000000</id>
                  <Value>4999999</Value>
                  <Name>สำนักบริหารกลาง</Name>
                  <description>สบก.</description>
                </row>
                <row>
                  <id>11</id>
                  <Value>2100910101500001</Value>
                  <Name>เงินอุดหนุนทั่วไป</Name>
                  <description>เงินอุดหนุนทั่วไป : เงินอุดหนุนการสร้าง</description>
                </row>
                <row>
                  <id>80001</id>
                  <Value>80001</Value>
                  <Name>กองทุน 80001</Name>
                  <description>กองทุน 80001</description>
                </row>
                <row>
                  <id>9090973008000018</id>
                  <Value>9090973008000018</Value>
                  <Name>ค่าผลิตและจัดส่งบ้าน</Name>
                  <description>ค่าผลิตและจัดส่งบ้านแบบ Knock Down จำนวน</description>
                </row>
                </table>`;
  xmlTBPRZNR = `<table xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <row>
                  <id>1000343</id>
                  <Value>1000K1901000</Value>
                  <Name>ส่งเสริม เผยแพร่แ...	</Name>
                  <description>ส่งเสริม เผยแพร่แ...	</description>
                </row>
                <row>
                  <id>1000344</id>
                  <Value>1000K1904000</Value>
                  <Name>ฝึกอบรม เผยแพร่แล...	</Name>
                  <description>-</description>
                </row>
		            <row>
                  <id>1000345</id>
                  <Value>1000K3048000</Value>
                  <Name>การก่อสร้าง ปรับป...	</Name>
                  <description>-</description>
                </row>
		            <row>
                  <id>1000346</id>
                  <Value>1000L6206000</Value>
                  <Name>การบริหารจัดการ</Name>
                  <description>-</description>
                </row>
                </table>`;
   xmlTBKOSTL = `<table xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <row>
                  <id>101</id>
                  <Value>0300200000</Value>
                  <Name>สป.กค</Name>
                  <description>สป.กค.</description>
                </row>
                <row>
                  <id>50001</id>
                  <Value>0300200001</Value>
                  <Name>กกม.</Name>
                  <description>สำนักงานกฏหมาย</description>
                </row>
                </table>`;
  xmlTBFKBER = `<table xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <row>
                  <id>1000084</id>
                  <Value>P3600</Value>
                  <Name>ชัยภูมิ</Name>
                  <description>ชัยภูมิ</description>
                </row>
                <row>
                  <id>1000085</id>
                  <Value>P3700</Value>
                  <Name>อำนาจเจริญ</Name>
                  <description>อำนาจเจริญ</description>
                </row>
		            <row>
                  <id>1000086</id>
                  <Value>P3800</Value>
                  <Name>บึงกาฬ</Name>
                  <description>บึงกาฬ</description>
                </row>
	            	<row>
                  <id>1000087</id>
                  <Value>P3900</Value>
                  <Name>หนองบัวลำภู</Name>
                  <description>หนองบัวลำภู</description>
                </row>
	            	<row>
                  <id>1000087</id>
                  <Value>P3900</Value>
                  <Name>หนองบัวลำภู</Name>
                  <description>หนองบัวลำภู</description>
                </row>
            		<row>
                  <id>1000088</id>
                  <Value>P4000</Value>
                  <Name>ขอนแก่น</Name>
                  <description>ขอนแก่น</description>
                </row>
		            <row>
                  <id>1000089</id>
                  <Value>P4100</Value>
                  <Name>อุดรธาณี</Name>
                  <description>อุดรธาณี</description>
                </row>
                </table>`;

  // เพิ่มรหัสบัญชีแยกประเภท
  xmlTBHKONT = `<table xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <row>
                  <id>xx</id>
                  <Value>xxx</Value>
                  <Name>xxx</Name>
                  <description>xxx</description>
                </row>
                <row>
                  <id>yy</id>
                  <Value>yyy</Value>
                  <Name>yyy</Name>
                  <description>yyy</description>
                </row>
                </table>`;

  constructor( public dialogRef: MdDialogRef<DialogSearchComponent>, private httpService: Http) {};

  searchitem() {
    document.getElementById('progress-bar').style.display = 'block';
    console.log('S: ' + this.code_t);
    console.log('N: ' + this.name_t);
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
        // this.sentItem(this.xml_s, name_r);
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
    }`
  }
  sentItem(xml: string, name_r) {
    console.log('Sent data to Serivce');
    const headers = new Headers({ 'Content-Type': 'application/xml' });
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
          id:    x[i].childNodes[0].nodeValue,
          Value:        value[i].childNodes[0].nodeValue,
          Name:         name[i].childNodes[0].nodeValue,
          description:  description[i].childNodes[0].nodeValue
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
