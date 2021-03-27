import { ContatoService } from '../contato.service';
import { Contato } from '../contato.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato-read',
  templateUrl: './contato-read.component.html',
  styleUrls: ['./contato-read.component.css']
})
export class ContatoReadComponent implements OnInit {

  contatos: Contato[]
  displayedColumns = ['codigo', 'nome', 'sobreNome','cpf', 'email', 'endereco', 'telefone','action']
  
  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.contatoService.read().subscribe(contatos => {
      this.contatos = contatos
    })
  }

}
