import { Contato } from "../contato.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ContatoService } from "../contato.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contato-update",
  templateUrl: "./contato-update.component.html",
  styleUrls: ["./contato-update.component.css"],
})
export class ContatoUpdateComponent implements OnInit {
  contato: Contato;

  constructor(
    private contatoService: ContatoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const codigo = +this.route.snapshot.paramMap.get("codigo");
    this.contatoService.readById(codigo).subscribe((contato) => {
      this.contato = contato;
    });
  }

  updateContato(): void {
    this.contatoService.update(this.contato).subscribe(() => {
      this.contatoService.showMessage("Contato atualizado com sucesso!");
      this.router.navigate(["/contatos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/contatos"]);
  }
}
