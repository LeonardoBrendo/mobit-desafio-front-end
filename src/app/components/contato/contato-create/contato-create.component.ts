import { Contato } from '../contato.model';
import { ContatoService } from 'src/app/components/contato/contato.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato-create',
  templateUrl: './contato-create.component.html',
  styleUrls: ['./contato-create.component.css']
})
export class ContatoCreateComponent implements OnInit {

  contato: Contato = {
    nome: '',
    sobreNome: '',
    cpf: '',
    email: '',
    endereco: '',
    telefone: ''
  }

  constructor(private contatoService: ContatoService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createContato(): void {
    this.contatoService.create(this.contato).subscribe(() => {
      this.contatoService.showMessage('Contato criado!')
      this.router.navigate(['/contatos'])
    })

  }

  cancel(): void {
    this.router.navigate(['/contatos'])
  }
}
