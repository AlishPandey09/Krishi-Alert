import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommoditiesComponent } from "./commodities/commodities.component";
import { CommoditiesRoutingModule } from './commodities-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommoditiesComponent],
  imports: [
    CommonModule, CommoditiesRoutingModule, FormsModule,     ReactiveFormsModule,

  ]
})
export class CommoditiesModule { }
