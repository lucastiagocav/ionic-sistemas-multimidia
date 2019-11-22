import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmentaDisciplinaPage } from './ementa-disciplina.page';

const routes: Routes = [
  {
    path: '',
    component: EmentaDisciplinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmentaDisciplinaPageRoutingModule {}
