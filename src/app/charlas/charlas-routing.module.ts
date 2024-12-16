import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostCharlaComponent } from './components/post-charla/post-charla.component';
import { CharlasRondaComponent } from './components/charlas-ronda/charlas-ronda.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'new', component: PostCharlaComponent },
  { path: 'charlasRonda/:idRonda', component: CharlasRondaComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharlasRoutingModule {}
