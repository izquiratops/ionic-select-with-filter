import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SelectorComponent } from './selector/selector.component';
import { FilterKeywordsPipe } from './selector/filterKeywords.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    SelectorComponent,
    FilterKeywordsPipe
  ]
})
export class HomePageModule {}
