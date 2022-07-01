import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { mascaraCpf } from '../utils/masks/mascaraCpf.service';
import { validaCpfService } from '../utils/validators/validaCpf.service';

@Component({
  selector: 'app-admissao',
  templateUrl: './admissao.component.html',
  styleUrls: ['./admissao.component.scss'],
})
export class AdmissaoComponent implements OnInit {
  protected cpf: string = '';
  protected errorCpfObrigatorio: boolean = false;
  protected errorCpfInvalido: boolean = false;
  protected submeterCpf: boolean = false;

  protected cpfFormGroup = this._formBuilder.group({
    cpf: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private validaCpfSevice: validaCpfService,
    private mascaraCpfService: mascaraCpf
  ) {}

  ngOnInit(): void {}

  validaForm(){
    this.submeterCpf = false;
    let cpf = this.cpfFormGroup.get('cpf')?.value;
    cpf = cpf?.replace(/\D/g, '');
    if (!cpf || cpf?.length == 0) {
      return (this.errorCpfObrigatorio = true);
    }
    if ((cpf && cpf.length !== 11) || cpf && !this.validaCpfSevice.validaCpf(cpf)) {
      return (this.errorCpfInvalido = true);
    } else {
      this.onSubmit();
      this.errorCpfObrigatorio = false;
      this.errorCpfInvalido = false;
      return;
    }
  }

  onSubmit() {
    this.submeterCpf = true;
  }

  onChange(event: any) {
    this.errorCpfObrigatorio = false;
    this.errorCpfInvalido = false;
    this.mascaraCpfService.adicionaMascara(event, this.cpfFormGroup);
  }
}
