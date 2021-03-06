import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodelabComponent } from './codelab/codelab.component';
import { CodelabsComponent } from './codelabs/codelabs.component';
import { MeetupsComponent } from './meetups/meetups.component';

const routes: Routes = [
  {
    path: '',
    component: CodelabsComponent
  },
  {
    path: 'workshops/:id',
    component: CodelabComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
