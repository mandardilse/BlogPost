import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationRoutingModule } from './organisation-routing.module';
import { OrganisationListComponent } from './organisation-list/organisation-list.component';

@NgModule({
  imports: [
    CommonModule,
    OrganisationRoutingModule
  ],
  declarations: [OrganisationListComponent]
})
export class OrganisationModule { }
