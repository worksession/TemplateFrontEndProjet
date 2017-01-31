import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormationComponent } from './formation.component';
import {PresentationComponent} from './components/presentation/presentation.component';
import {ProgrammeComponent} from './components/programme/programme.component';
import {GlobalModule} from '../global/global.module';
import {MetaDataComponent} from './components/metadata/metadata.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {GroupeComponent} from './components/groupe/groupe.component';

@NgModule({
  declarations: [
  PresentationComponent,
    MetaDataComponent,
    FormationComponent,
    ProgrammeComponent,
    ExperienceComponent,
    GroupeComponent
  ],
  imports: [
    BrowserModule,
    GlobalModule
  ],
  exports : [FormationComponent],
  providers: []
})
export class FormationModule { }
