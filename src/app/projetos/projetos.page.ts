import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.page.html',
  styleUrls: ['./projetos.page.scss'],
})
export class ProjetosPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  constructor() {
  }

  ngOnInit() {
  }

}
