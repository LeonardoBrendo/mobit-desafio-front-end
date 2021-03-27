import { Router, ActivatedRoute } from "@angular/router";
import { ContatoService } from "../contato.service";
import { Contato } from "../contato.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contato-delete",
  templateUrl: "./contato-delete.component.html",
  styleUrls: ["./contato-delete.component.css"],
})
export class ContatoDeleteComponent implements OnInit {
  contato: Contato;

  constructor(
    private contatoService: ContatoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const codigo = +this.route.snapshot.paramMap.get('codigo');
    this.contatoService.readById(codigo).subscribe((contato) => {
      this.contato = contato;
    });
  }

  deleteContato(): void {
    this.contatoService.delete(this.contato.codigo).subscribe(() => {
      this.contatoService.showMessage("Contato excluido com sucesso!");
      this.router.navigate(["/contatos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/contatos"]);
  }
}
