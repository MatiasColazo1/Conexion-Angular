import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  url='/api';
  constructor(private http: HttpClient) { }

  //get pais
  getPais()
  {
    return this.http.get(this.url);
  }

  //get un pais
  getUnPais(id:string){
    return this.http.get<Pais[]>(this.url+'/'+id);
  }

  //agregar pais
  addPais(pais:Pais)
  {
    return this.http.post(this.url, pais);
  }

  //eliminar pais
  deletePais(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //editar pais
  editPais(id:string, pais:Pais){
    return this.http.put(this.url+'/'+id, pais);
  }

}

export interface Pais{
  id_pais?:string;
  nombre?:string;
  logo?:string;
}