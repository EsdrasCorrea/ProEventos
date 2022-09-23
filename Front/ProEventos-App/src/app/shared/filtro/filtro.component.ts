import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {
  @Input()
  titulo!: string;
  @Input() iconClass = ' fa fa-user';
  @Input() subTitulo = 'Desde - 2021';
  @Input() botaoListar = false;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  listar(): void {
    this.router.navigate([`${this.titulo.toLocaleLowerCase()}/lista`]);
  }

}
