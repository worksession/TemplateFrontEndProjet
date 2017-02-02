import {Component, OnInit} from '@angular/core';
import {FormationService} from '../../services/formation.service';
import {ws} from '../../ws/ws.link';
import {FormationModel} from './model/formation.model';
import {Transformer} from './utils/transformer.utils';
import {ExperienceDraw} from './utils/ExperienceDraw.utils';

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

  private formationModel:FormationModel = new FormationModel();
  private transformer:Transformer = new Transformer();
  private experienceDraw:ExperienceDraw = new ExperienceDraw();

  constructor(private formationService:FormationService) {
  }

  ngOnInit():void {

    this.getFormationData(ws.webmobile);

  }

  public getFormationData(ws:string) {

    this.formationService.getFormation(ws).subscribe(
      result => {
        this.formationModel = this.transformer.PrepareFormationModel(result);
        this.experienceDraw.setItemStyle(this.formationModel.experience);
        this.experienceDraw.draw(this.formationModel.experience);
        this.experienceDraw.setGraphBackgroundHeight();
      },
      err => {
        console.log(err);
      });

  }


}
