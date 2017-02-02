export class FormationModel {

  private _titre:String;
  private _presentation:String[] = [];
  private _linkmenu:String[];
  private _experience:Experience;
  private _programme:Array<Programme> = [];
  private _groupe:Array<Groupe> = [];
  private _duree:String;
  private _nbheures:String;


  get duree():String {
    return this._duree;
  }

  set duree(value:String) {
    this._duree = value;
  }

  get nbheures():String {
    return this._nbheures;
  }

  set nbheures(value:String) {
    this._nbheures = value;
  }

  get titre():String {
    return this._titre;
  }

  set titre(value:String) {
    this._titre = value;
  }

  get experience():Experience {
    return this._experience;
  }

  set experience(value:Experience) {
    this._experience = value;
  }

  get presentation():String[] {
    return this._presentation;
  }

  set presentation(value:String[]) {
    this._presentation = value;
  }

  get linkmenu():String[] {
    return this._linkmenu;
  }

  set linkmenu(value:String[]) {
    this._linkmenu = value;
  }

  get programme():Array<Programme> {
    return this._programme;
  }

  set programme(value:Array<Programme>) {
    this._programme = value;
  }

  get groupe():Array<Groupe> {
    return this._groupe;
  }

  set groupe(value:Array<Groupe>) {
    this._groupe = value;
  }
}

export class Experience {

  private _titre:String;
  private _source:String;
  private _target:String;
  private _anchor:String;
  private _style:String;


  get titre():String {
    return this._titre;
  }

  set titre(value:String) {
    this._titre = value;
  }

  get style():String {
    return this._style;
  }

  set style(value:String) {
    this._style = value;
  }

  get source():String {
    return this._source;
  }

  set source(value:String) {
    this._source = value;
  }

  get target():String {
    return this._target;
  }

  set target(value:String) {
    this._target = value;
  }

  get anchor():String {
    return this._anchor;
  }

  set anchor(value:String) {
    this._anchor = value;
  }
}

export class Programme {

  private _etape:Number;
  private _titre:String;
  private _details:String[] = [];


  get etape():Number {
    return this._etape;
  }

  set etape(value:Number) {
    this._etape = value;
  }

  get titre():String {
    return this._titre;
  }

  set titre(value:String) {
    this._titre = value;
  }

  get details():String[] {
    return this._details;
  }

  set details(value:String[]) {
    this._details = value;
  }
}

export class Groupe {

  private _nom:String;
  private _seances:String[] = [];

  get nom():String {
    return this._nom;
  }

  set nom(value:String) {
    this._nom = value;
  }

  get seances():String[] {
    return this._seances;
  }

  set seances(value:String[]) {
    this._seances = value;
  }


}
