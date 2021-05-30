import { Address } from "./address";
import { VaccineRecord } from "./vaccine-record";

export class Patient {
   ssn:string;
   dob:string;
   fullName:string;
   status:string;
   address:Address;
   vaccineRecordList: VaccineRecord[];
     
}