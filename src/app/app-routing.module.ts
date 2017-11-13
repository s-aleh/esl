import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { StartPageComponent } from './layouts/start-page/start-page.component';

const appRoutes: Routes = [
  { path: '', component: StartPageComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
