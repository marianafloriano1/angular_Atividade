import { Component, OnInit } from '@angular/core';
import { ComponeneteSevicoService } from '../componenete-sevico.service';

@Component({
  selector: 'app-componente',
  standalone: false,
  templateUrl: './componente.component.html',
  styleUrl: './componente.component.css'
})
export class ComponenteComponent implements OnInit {

  infos: any[] = [];

  constructor(private service: ComponeneteSevicoService) { }

  ngOnInit(): void {
    this.service.getInfo().subscribe(
      json => this.infos = json

    );
  }

}
