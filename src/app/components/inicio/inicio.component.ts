import { Component, OnInit } from '@angular/core';
import { PaisService, Pais } from '../../services/pais.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //variable
  ListaPais: Pais[] = [];

  constructor(private PaisService: PaisService, private router:Router) { }

  ngOnInit(): void {
    this.listaPais();
  }

  listaPais()
  {
    this.PaisService.getPais().subscribe(
      res=>{
        console.log(res)
        this.ListaPais=<any>res;
      },
      err =>console.log(err)
    );
  }

  eliminar(id:string)
  {
    this.PaisService.deletePais(id).subscribe(
      res=>{
        console.log('Pais Eliminado');
      },
      err=> console.log(err)
    )
  }

  editar(id:string)
  {
    this.router.navigate(['/edit/'+id])
  }

}
