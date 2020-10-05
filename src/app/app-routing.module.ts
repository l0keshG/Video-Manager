import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./authentication/service/auth.guard";
import { LoginComponent } from './authentication/login/login.component';
import { LayoutComponent } from "./shared/components/layout/layout.component";
import { PageNotFoundComponent } from "./shared/components/page.not.found.component";


const routes: Routes = [
  {
    path: "", component: LoginComponent 
  },
  {
    path: "homepage",
    component: LayoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload",
      useHash: true,
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
