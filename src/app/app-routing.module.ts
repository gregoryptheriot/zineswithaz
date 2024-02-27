import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IssueComponent } from './components/issue/issue.component';
import { ResourcesComponent } from './components/resources/resources.component';

const routes: Routes = [
  { path: 'issues/:id', component: IssueComponent },
  { path: 'issues/:id/resources', component: ResourcesComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
