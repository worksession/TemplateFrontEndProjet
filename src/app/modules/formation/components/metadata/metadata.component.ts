import { ViewEncapsulation,Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'metadata-component',
  templateUrl: './metadata.template.html',
  styleUrls: ['./metadata.style.scss'],
  //encapsulation : ViewEncapsulation.Native
})
export class MetaDataComponent implements OnInit{

@Input()
public items :String[] = [];

ngOnInit(): void {



  }

}
