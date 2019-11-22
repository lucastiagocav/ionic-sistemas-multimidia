import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmentaDisciplinaPageRoutingModule } from './ementa-disciplina-routing.module';

import { EmentaDisciplinaPage } from './ementa-disciplina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmentaDisciplinaPageRoutingModule
  ],
  declarations: [EmentaDisciplinaPage]
})
export class EmentaDisciplinaPageModule {}
