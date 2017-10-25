export class TableList {
    BUKRS: string;
    LBBUKRS: string;
    TBBLDAT: string; // (ID) Account Date
    TBBUDAT: string; // (ID) Date Invoiced
    TBZZPMT: string;
    LBZZPMT: string;
    TBXBLNR: string;
    GEBER: string; // แหล่งของเงิน
    GEBER_NAME: string;
    tbSearch_term: string; // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
    tbBankn: string; // เลขที่บัญชีเงินฝากธนาคาร
    HKONT: string; // รหัสบัญชีแยกประเภททั่วไป
    KOSTL: string; // รหัสศูนย์ต้นทุน
    FISTL: string; // รหัสงบประมาณ
    FKBER: string; // รหัสกิจกรรมหลัก
    WRBTR: string; // จำนวนเงินที่ขอเบิก
    PRZNR: string; // รหัสกิจกรรมย่อย
    ZZOBJ_NAME: string; // รหัสบัญชีย่อย
    ZZUNIT: string; // รหัสเจ้าของบัญชีย่อย
    ZZFIELD1: string; // รหัสหมวดพัสดุ
    VBUND: string; // รหัสหน่วยงานคู่ค้า

    // OTHER
    GJAHR: number; // ปีบัญชี
    SGTXT: string; // รายละเอียดบรรทัดรายการ
    ZLSCH: String;

    // ALL NAME
    HKONT_NAME: string;
    KOSTL_NAME: string; // (N) ชื่อศูนย์ต้นทุน
    FISTL_NAME: string; // (N) ชื่องบประมาณ
    FKBER_NAME: string; // (N) ชื่อกิจกรรมหลัก
    PRZNR_NAME: string; // (N) ชื่อกิจกรรมย่อย
    ZZOBJ: string; // (N) รหัสบัญชีย่อย
    ZZUNIT_NAME: string; // (N) รหัสเจ้าของบัญชีย่อย
    ZZFIELD1_NAME: string; // (N) รหัสหมวดพัสดุ
    VBUND_NAME: string; // (N) รหัสหน่วยงานคู่ค้า
    LBKBLNR: String;

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
