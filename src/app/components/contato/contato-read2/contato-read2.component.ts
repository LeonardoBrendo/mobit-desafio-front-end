import { Contato } from '../contato.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ContatoRead2DataSource } from './contato-read2-datasource';

@Component({
  selector: 'app-contato-read2',
  templateUrl: './contato-read2.component.html',
  styleUrls: ['./contato-read2.component.css']
})
export class ContatoRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Contato>;
  dataSource: ContatoRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['codigo', 'nome', 'sobreNome','cpf', 'email', 'endereco', 'telefone'];

  ngOnInit() {
    this.dataSource = new ContatoRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
