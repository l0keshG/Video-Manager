import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/authentication/service/auth.guard";
import { UploadComponent } from './upload/upload.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path: "upload-video",
    component: UploadComponent
  },
  {
    path: "view-video",
    component: ViewComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
