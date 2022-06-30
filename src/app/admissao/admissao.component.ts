import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validaCpfService } from '../utils/validaCpf.service';

@Component({
  selector: 'app-admissao',
  templateUrl: './admissao.component.html',
  styleUrls: ['./admissao.component.scss'],
})
export class AdmissaoComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  cpfFormGroup = this._formBuilder.group({
    cpf: [
      '',
      Validators.required,
      Validators.pattern('(^d{3}\x2Ed{3}\x2Ed{3}\x2Dd{2}$)'),
    ],
  });

  protected cpf: string = '';

  errorCpfObrigatorio: boolean = false;
  errorCpfInvalido: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private validaCpfSevice: validaCpfService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    let cpf = this.cpfFormGroup.get('cpf')?.value;
    console.log(cpf?.length);

    if (!cpf || cpf?.length == 0) {
      return (this.errorCpfObrigatorio = true);
    }
    if ((cpf && cpf.length !== 11) || !this.validaCpfSevice.TestaCPF(cpf!)) {
      return (this.errorCpfInvalido = true);
    } else {
      return;
    }
  }

  onChange() {
    this.errorCpfObrigatorio = false;
    this.errorCpfInvalido = false;
  }
}
