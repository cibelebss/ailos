import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class mascaraCpf {
  constructor() {}

  adicionaMascara(cpf: string, formGroup: FormGroup) {
    if (!cpf) return;
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length <= 11) {
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    if (cpf === formGroup.get('cpf')?.value) return;
    return formGroup.get('cpf')?.setValue(cpf);
  }
}
