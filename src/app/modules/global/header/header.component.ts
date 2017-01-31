import {  OnInit,Component } from '@angular/core';
import {HeaderPosition} from './header.position';


@Component({
  selector: 'template-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
 
  headerPosition:HeaderPosition;

  constructor() {
  	this.headerPosition = new HeaderPosition();
  }

    ngOnInit(): void {
  
       this.headerPosition.SetLiWidth();
    
  }
 
}
