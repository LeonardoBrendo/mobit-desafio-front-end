import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-contato-crud',
  templateUrl: './contato-crud.component.html',
  styleUrls: ['./contato-crud.component.css']
})
export class ContatoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Contatos',
      icon: 'storefront',
      routeUrl: '/contatos'
    }
  }

  ngOnInit(): void {
  }

  navigateToContatoCreate(): void {
    this.router.navigate(['/contatos/create'])
  }

}
