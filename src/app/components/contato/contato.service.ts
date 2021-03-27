import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Contato } from "./contato.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: "root",
})
export class ContatoService {
  baseUrl: string = environment.apiURLBase + "/api/contato";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.baseUrl, contato).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(codigo: number): Observable<Contato> {
    const url = `${this.baseUrl}/${codigo}`;
    return this.http.get<Contato>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(contato: Contato): Observable<Contato> {
    const url = `${this.baseUrl}/${contato.codigo}`;
    return this.http.put<Contato>(url, contato).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(codigo: number): Observable<Contato> {
    const url = `${this.baseUrl}/${codigo}`;
    return this.http.delete<Contato>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Informe corretamente as informaçõe nos campos", true);
    return EMPTY;
  }
}
