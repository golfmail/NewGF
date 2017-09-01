export class TableList {
    TBBUKRS: string;
    LBBUKRS: string;
    TBBLDAT: string;
    TBBUDAT: string;
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

    // ALL ID
    IDFISTL: string; // (ID) รหัสงบประมาณ
    IDKOSTL: string; // (ID) รหัสศูนย์ต้นทุน
    IDHKONT: string; // (ID) รหัสบัญชีแยกประเภททั่วไป
    IDWRBTR: string; // (ID) จำนวนเงินที่ขอเบิก
}

export class SearchList {
  ad_org_id:   string;
  value:       string;
  name:        string;
  description: string;
}
