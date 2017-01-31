import {  OnInit,Component } from '@angular/core';
import {FooterPosition} from './footer.position';


@Component({
  selector: 'template-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
 
  footerPosition:FooterPosition;
  lat: number = 33.586084;
  lng: number = -7.609631;
  
  constructor() {
  	this.footerPosition = new FooterPosition();
  }

    ngOnInit(): void {
  
     //  this.footerPosition.SetLiWidth();
    
  }
 
}
