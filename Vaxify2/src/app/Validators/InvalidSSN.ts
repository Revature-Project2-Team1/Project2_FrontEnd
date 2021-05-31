import { AbstractControl, ValidationErrors } from '@angular/forms';
  
export class InvalidSSNValidator {
    static InvalidSSN(String: AbstractControl) : ValidationErrors | null {
        if((String.value as string)!=null){
            return {InvalidSSN: true}
        }
  
        return null;
    }
}