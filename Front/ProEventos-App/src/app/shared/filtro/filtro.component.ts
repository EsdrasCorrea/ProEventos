import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {
  @Input() titulo: string | undefined;

  constructor() { }

  ngOnInit() {
  }

}
