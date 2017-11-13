import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImplodePipe } from '../pipes/implode.pipe';

import { IrregularVerbsComponent } from './irregular-verbs/irregular-verbs.component';
import { RegularVerbsComponent } from './regular-verbs/regular-verbs.component';
import { VerbsComponent } from './verbs.component';

import {
  MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatTabsModule, MatExpansionModule
} from '@angular/material';

import { VerbsRoutingModule } from './verbs-routing.module';
import { IrregularVerbsService } from './irregular-verbs/irregular-verbs.service';

@NgModule({
  imports: [
    CommonModule,
    VerbsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule
  ],
  declarations: [
    IrregularVerbsComponent,
    RegularVerbsComponent,
    VerbsComponent,
    ImplodePipe
  ],
  providers: [
    IrregularVerbsService
  ]
})
export class VerbsModule {}
