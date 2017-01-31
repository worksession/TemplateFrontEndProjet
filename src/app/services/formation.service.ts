import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class FormationService {


        constructor(private http:Http) {}


        public getFormation(ws:string)
        {

             return this.http.get(ws)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error));
        }

}
