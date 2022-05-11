import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from "./imprint/imprint.component";
import { DataProtectionComponent } from "./data-protection/data-protection.component";
import { ContentComponent } from "./content/content.component";

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path:'imprint', component: ImprintComponent},
  {path:'data-protection', component: DataProtectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
