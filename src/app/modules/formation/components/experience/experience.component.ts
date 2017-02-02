import {ViewEncapsulation, Component, OnInit, Input, Renderer} from '@angular/core';
import {ExperiencePosition} from './experience.position';
import {Experience} from '../../model/formation.model';

@Component({
  selector: 'experience-component',
  templateUrl: './experience.template.html',
  styleUrls: ['./experience.style.scss'],
  //encapsulation : ViewEncapsulation.Native
})
export class ExperienceComponent implements OnInit {

  @Input()
  private experience:Experience;

  private experiencePosition:ExperiencePosition = new ExperiencePosition();


  ngOnInit():void {

    this.experiencePosition.setPosition();

  }


}
