import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponentComponent } from './component/main-component/main-component.component';
import { HelpComponentComponent } from './component/help-component/help-component.component';

const routes: Routes = [
  { path: 'main', component: MainComponentComponent },
  { path: 'help', component: HelpComponentComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 
  
}
