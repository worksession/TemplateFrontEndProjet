import { Component,OnInit,Input } from '@angular/core';
import {ProgrammePosition} from './programme.position';

@Component({
  selector: 'programme-component',
  templateUrl: './programme.template.html',
  styleUrls: ['./programme.style.scss'],
  providers : [],

})
export class ProgrammeComponent implements OnInit{

private programmePosition : ProgrammePosition = new ProgrammePosition();

  @Input()
  private programme;

  constructor() {


  }

   ngOnInit(): void {


      this.programmePosition.Center();
      this.programmePosition.setModuleContainerHeight();
     }






}
