import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'explode'})
export class ExplodePipe implements PipeTransform {
  transform(value:string, index:number):String {

    //  let keys:String[] = [";","/",",",":"];
    let arr:String[] = value.split(";");
    return arr[index];
    

  }
}
