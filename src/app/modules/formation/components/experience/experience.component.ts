import { ViewEncapsulation,Component,OnInit,Input } from '@angular/core';
import {ExperienceJsPlumb} from './experience.jsplumb';
import {ExperiencePosition} from './experience.position';

@Component({
  selector: 'experience-component',
  templateUrl: './experience.template.html',
  styleUrls: ['./experience.style.scss'],
  //encapsulation : ViewEncapsulation.Native
})
export class ExperienceComponent implements OnInit{

  @Input()
  private experience;
  private experienceJsPlumb : ExperienceJsPlumb = new ExperienceJsPlumb()
  private experiencePosition:ExperiencePosition = new ExperiencePosition();
  ngOnInit(): void {

     this.experienceJsPlumb.DrawGraph();
     this.experiencePosition.setGraphBackgroundHeight();
  }

}
