import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'view/:name', component: ViewComponent },
  { path: '**', component: ListComponent },
  { path: '', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
