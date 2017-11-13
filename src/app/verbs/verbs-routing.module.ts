import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerbsComponent } from './verbs.component';
import { RegularVerbsComponent } from './regular-verbs/regular-verbs.component';
import { IrregularVerbsComponent } from './irregular-verbs/irregular-verbs.component';

const verbsRoutes: Routes = [
  { path: 'verbs', component: VerbsComponent, children: [
      { path: '', redirectTo: 'irregular', pathMatch: 'full'},
      { path: 'regular', component: RegularVerbsComponent },
      { path: 'irregular', component: IrregularVerbsComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(verbsRoutes) ],
  exports: [ RouterModule ]
})
export class VerbsRoutingModule { }
