import {FormationModel} from '../model/formation.model';

export class Transformer {

  private formationModel:FormationModel = new FormationModel();

  public PrepareFormationModel(result) : FormationModel{

    this.formationModel.titre = result.titre;
    this.formationModel.presentation = result.presentation;
    this.formationModel.linkmenu = result.linkmenu;
    this.formationModel.programme = result.programme;
    this.formationModel.experience = result.experience;
    this.formationModel.groupe = result.groupe;
    this.formationModel.duree = result.duree;
    this.formationModel.nbheures = result.nbheure;

    return this.formationModel;

  }

}
