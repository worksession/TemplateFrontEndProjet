import { Component,OnInit } from '@angular/core';
import { appPosition } from './app.jquery';


@Component({
  selector: 'dev-formation-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  title = 'app works!';
  public appposition = new appPosition();

ngOnInit(): void {
  
    this.appposition.centerTri();
    
  }
}
