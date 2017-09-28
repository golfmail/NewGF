export class TableList {
    TBBUKRS: string;
    LBBUKRS: string;
    TBBLDAT: string; // (ID) Account Date
    TBBUDAT: string; // (ID) Date Invoiced
    TBZZPMT: string;
    LBZZPMT: string;
    TBXBLNR: string;
    TBGEBER: string; // แหล่งของเงิน
    LBGEBER: string;
    tbSearch_term: string; // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
    tbBankn: string; // เลขที่บัญชีเงินฝากธนาคาร
    TBHKONT: string; // รหัสบัญชีแยกประเภททั่วไป
    TBKOSTL: string; // รหัสศูนย์ต้นทุน
    TBFISTL: string; // รหัสงบประมาณ
    TBFKBER: string; // รหัสกิจกรรมหลัก
    TBWRBTR: string; // จำนวนเงินที่ขอเบิก
    TBPRZNR: string; // รหัสกิจกรรมย่อย
    TBZZOBJ: string; // รหัสบัญชีย่อย
    TBZZUNIT: string; // รหัสเจ้าของบัญชีย่อย
    TBZZLOAN: string; // รหัสหมวดพัสดุ
    TBVBUND: string; // รหัสหน่วยงานคู่ค้า

    // OTHER
    GJAHR: number; // ปีบัญชี
    SGTXT: string; // รายละเอียดบรรทัดรายการ

    // ALL NAME
    LBHKONT: string;
    LBKOSTL: string; // (N) ชื่อศูนย์ต้นทุน
    LBFISTL: string; // (N) ชื่องบประมาณ
    LBFKBER: string; // (N) ชื่อกิจกรรมหลัก
    LBPRZNR: string; // (N) ชื่อกิจกรรมย่อย
    LBZZOBJ: string; // (N) รหัสบัญชีย่อย
    LBZZUNIT: string; // (N) รหัสเจ้าของบัญชีย่อย
    LBZZLOAN: string; // (N) รหัสหมวดพัสดุ
    LBVBUND: string; // (N) รหัสหน่วยงานคู่ค้า

    // ALL ID
    IDFISTL: string; // (ID) รหัสงบประมาณ
    IDKOSTL: string; // (ID) รหัสศูนย์ต้นทุน
    IDHKONT: string; // (ID) รหัสบัญชีแยกประเภททั่วไป
    IDWRBTR: string; // (ID) จำนวนเงินที่ขอเบิก
    IDSTERM: string; // (ID) เลขประจำตัวผู้เสียภาษี
    IDBLART: string; // (ID) Doc. Type
    IDDATEA: string; // (ID) Account Date
    IDDATEI: string; // (ID) Date Invoiced
    IDPRZNR: string; // (ID) กิจกรรมย่อย
    IDZZOBJ: string; // (ID) รหัสบัญชีย่อย
    IDZZUNIT: string; // (ID) รหัสเจ้าของบัญชีย่อย
    IDZZLOAN: string; // (ID) รหัสหมวดพัสดุ
    IDVBUND: string; // (ID) รหัสหน่วยงานคู่ค้า
}

export class SearchList {
  ad_org_id:   string;
  value:       string;
  name:        string;
  description: string;
}

export class DocSearch {
  docList: any[];
}
