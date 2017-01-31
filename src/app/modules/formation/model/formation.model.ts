export class FormationModel {

  private _titre:String;
  private _presentation:String[] = [];
  private _linkmenu:String[];
  private _programme: Array<Programme> = [];
  private _experience: Array<Experience> = [];
  private _groupe:Array<Groupe> = [];

  get titre():String{
      return this.titre;
      }

  set titre(value:String){
      this._titre=value;
      }

  get presentation():String[]{
      return this._presentation;
      }

  set presentation(value:String[]){
      this._presentation=value;
      }

  get linkmenu():String[]{
      return this._linkmenu;
      }

  set linkmenu(value:String[]){
      this._linkmenu=value;
      }

  get programme():Array<Programme>{
      return this._programme;
      }

  set programme(value:Array<Programme>){
      this._programme=value;
      }

  get experience():Array<Experience>{
      return this._experience;
      }

  set experience(value:Array<Experience>){
      this._experience=value;
      }

  get groupe():Array<Groupe>{
      return this._groupe;
      }

  set groupe(value:Array<Groupe>){
      this._groupe=value;
      }
}

export class Programme {

  private _etape : Number;
  private _titre : String;
  private _details : String[] = [];


  get etape():Number{
      return this._etape;
      }

  set etape(value:Number){
      this._etape=value;
      }

  get titre():String{
      return this._titre;
      }

  set titre(value:String){
      this._titre=value;
      }

  get details():String[]{
      return this._details;
      }

  set details(value:String[]){
      this._details=value;
      }
}

export class Experience {

  private _titre :String;
  private _html_id : String;


  get titre():String{
      return this._titre;
      }

  set titre(value:String){
      this._titre=value;
      }

  get html_id():String{
      return this._html_id;
      }

  set html_id(value:String){
      this._html_id=value;
      }
}

export class Groupe {

  private _nom:String;
  private _horraire:String[] = [] ;


    get nom():String {
      return this._nom;
    }

  set nom(value:String){
      this._nom=value;
      }

  get horraire():String[]{
      return this._horraire;
      }

  set horraire(value:String[]){
      this._horraire=value;
      }
}
