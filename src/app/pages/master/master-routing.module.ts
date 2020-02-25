import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterOverviewComponent } from './overview/overview.component';
import { StudentListComponent } from './student/component/student-list/student-list.component';
import { BusListComponent } from './bus/component/bus-list/bus-list.component';



const routes: Routes = [
  { path: 'overview', component: MasterOverviewComponent },
  { path: 'student', component: StudentListComponent },
  { path: 'bus', component: BusListComponent },
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
export class MasterRoutingModule { }
