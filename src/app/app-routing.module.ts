import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';


const routes: Routes = [
  { path: '', component: SearchPageComponent},
  { path: 'search', component: SearchPageComponent},
  { path: 'user/:keyword/:id', component: UserPageComponent},
  { path: '**', component: SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
