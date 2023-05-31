import { Component, OnInit } from '@angular/core';
import { Pais, PaisService } from '../../services/pais.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  pais: Pais={
    id_pais:"",
    nombre:"",
    logo:""
  };

  

  constructor(private PaisService:PaisService, private router: Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activeRoute.snapshot.params['id'];
    console.log("id de entrada: "+id_entrada);


    if(id_entrada){
      this.PaisService.getUnPais(id_entrada).subscribe(
        res=>{
          this.pais = res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      )
    }
  }

  editar(){
    if (this.pais.id_pais !== undefined) {
    this.PaisService.editPais(this.pais.id_pais, this.pais).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );
    this.router.navigate(["/inicio"]);
  }
}
}
