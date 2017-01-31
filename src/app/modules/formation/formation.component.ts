import {Component, OnInit} from '@angular/core';
import {FormationPosition} from './formation.position';
import {FormationService} from '../../services/formation.service';
import {ws} from '../../ws/ws.link';
import {Transformer} from '../formation/utils/transformer';
import {FormationModel} from './model/formation.model';

@Component({
  selector: 'template-formation',
  templateUrl: './formation.template.html',
  styleUrls: ['./formation.style.scss'],
  providers: [FormationService],
  host: {
    '(window:resize)': 'this.formationPosition.Center()'
  }
})
export class FormationComponent implements OnInit {

  private formationPosition:FormationPosition = new FormationPosition()
  private formationModel:FormationModel = new FormationModel();

  constructor(private formationService:FormationService) {
  }

  ngOnInit():void {

    this.getFormationData(ws.webmobile);

  }

  public getFormationData(ws:string) {

    this.formationService.getFormation(ws).subscribe(
      result => {

        this.formationModel = Transformer.WSToObject(result);
      },
      err => {
        console.log(err);
      });

  }


}
