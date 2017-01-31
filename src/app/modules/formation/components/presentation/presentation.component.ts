import { ViewEncapsulation,Component,OnInit,Input } from '@angular/core';
import {PresentationPosition} from './presentation.position';

@Component({
  selector: 'presentation-component',
  templateUrl: './presentation.template.html',
  styleUrls: ['./presentation.style.scss'],
  //encapsulation : ViewEncapsulation.Native
})
export class PresentationComponent implements OnInit{

  @Input()
  private presentation;
  @Input()
  private titre;

ngOnInit(): void {

    //   this.presentationPosition.Center();

  }

}
