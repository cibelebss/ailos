import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnInit {
  @Input() breadcrumb: string ='Cadastro / Admissão do Cooperado / Nova Admissão de Cooperado';

  constructor() {}

  ngOnInit(): void {}
}
