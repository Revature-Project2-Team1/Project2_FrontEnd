import { Address } from "cluster";
import { VaccineRecord } from "./vaccine-record";

export class Patient {
   ssn:String;
   dob:String;
   fullName:String;
   status:String;
   address:Address;
   vaccineRecordList: VaccineRecord[];
     
}