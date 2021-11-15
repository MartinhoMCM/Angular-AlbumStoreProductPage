import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  private _albumUrl="../assets/album.json";
  constructor(private _http: Http) { }

  getAlbum(id:number){
   return this._http.get(this._albumUrl).pipe(map(response => response.json()));
  }


}

export class _albumUrl{


  private id:number;
  private artist:string;
  private album:album[];

}

export class album{
  name:string;
  releaseDate:string;
  coverImage:string;
  tracks: tracks[];

}

export class tracks{
  trackNumber:number;
  trackName:string;
  trackLength:string;
  trackPrice:number;

}