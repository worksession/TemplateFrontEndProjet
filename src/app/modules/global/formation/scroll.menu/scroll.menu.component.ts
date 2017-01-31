import {  OnInit,Component } from '@angular/core';
import {ScrollMenuPosition} from './scroll.menu.position';


@Component({
  selector: 'formation-scroll-menu',
  templateUrl: './scroll.menu.template.html',
  styleUrls: ['./scroll.menu.style.scss']
})
export class ScrollMenuComponent implements OnInit{
 
  scrollMenuPosition:ScrollMenuPosition;

  constructor() {
  	this.scrollMenuPosition = new ScrollMenuPosition();
  }

    ngOnInit(): void {
      this.scrollMenuPosition.drawRec();
      this.scrollMenuPosition.runScanner();
       this.scrollMenuPosition.addClickEvent();
    
  }
 
}
