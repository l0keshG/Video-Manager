import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./authentication/service/auth.guard";
import { LoginComponent } from './authentication/login/login.component';
import { LayoutComponent } from "./shared/components/layout/layout.component";
import { PageNotFoundComponent } from "./shared/components/page.not.found.component";
import { viewClassName } from '@angular/compiler';


const routes: Routes = [
  {
    path: "login", component: LoginComponent 
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "core",
        loadChildren: () =>
          import("./core/modules/core.module").then(
            (t) => t.CoreModule
          )
      }]
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
