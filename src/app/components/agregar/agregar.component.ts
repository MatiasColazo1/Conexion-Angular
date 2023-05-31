import { Component, OnInit } from '@angular/core';
import { Pais, PaisService } from '../../services/pais.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  pais: Pais={
    id_pais:"",
    nombre:"",
    logo:""
  };

  constructor(private PaisService:PaisService, private router: Router) { }

  ngOnInit(): void {
  }

  agregar(){
    delete this.pais.id_pais;

    this.PaisService.addPais(this.pais).subscribe();
    this.router.navigate(["/inicio"]);
  }

}
