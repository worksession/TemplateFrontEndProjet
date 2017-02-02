import {ViewEncapsulation, Component, OnInit, Input} from '@angular/core';
import {Groupe} from '../../model/formation.model';
import {GroupePosition} from './groupe.position';

@Component({
  selector: 'groupe-component',
  templateUrl: './groupe.template.html',
  styleUrls: ['./groupe.style.scss'],
  //encapsulation : ViewEncapsulation.Native
})
export class GroupeComponent implements OnInit {

  private groupePosition:GroupePosition = new GroupePosition();

  @Input()
  private groupes:Groupe;

  @Input()
  private nbheures:Number;

  @Input()
  private duree:Number;

  ngOnInit():void {

    this.groupePosition.setPosition();

  }

}
