import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.scss'],
})
export class InformacoesComponent implements OnInit {
  @Input() nome: string = '';
  @Input() situacao: string = '';

  constructor() {}

  ngOnInit(): void {}
}
