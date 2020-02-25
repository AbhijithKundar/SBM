import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MappingOverviewComponent } from './overview/overview.component';



const routes: Routes = [
  { path: 'overview', component: MappingOverviewComponent },
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MappingRoutingModule { }
