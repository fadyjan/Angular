import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';

import { NavbarComponent } from "./navbar/navbar.component";
import { FormComponent  } from "./form/form.component";
import { ListComponent } from "./list/list.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { UserEditPageComponent } from './user-edit-page/user-edit-page.component';


const routes: Routes = [
  { path: '',component: DefaultPageComponent },
  { path: 'first', component: FormComponent },
  { path: 'second', component: ListComponent },
  { path: 'useredit/:id' ,component:UserEditPageComponent},
  { path: "**", component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [FormComponent,ListComponent,PageNotFoundComponent,DefaultPageComponent,UserEditPageComponent]
