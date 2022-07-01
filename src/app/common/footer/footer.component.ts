import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() breadcrumb: string ='Cadastro / Admissão do Cooperado / Nova Admissão de Cooperado';
  constructor() { }

  ngOnInit(): void {
  }

}
