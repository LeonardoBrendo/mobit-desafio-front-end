import { ContatoDeleteComponent } from './components/contato/contato-delete/contato-delete.component';
import { ContatoUpdateComponent } from './components/contato/contato-update/contato-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ContatoCrudComponent } from "./views/contato-crud/contato-crud.component";
import { ContatoCreateComponent } from './components/contato/contato-create/contato-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "contatos",
    component: ContatoCrudComponent
  },
  {
    path: "contatos/create",
    component: ContatoCreateComponent
  },
  {
    path: "contatos/update/:codigo",
    component: ContatoUpdateComponent
  },
  {
    path: "contatos/delete/:codigo",
    component: ContatoDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
