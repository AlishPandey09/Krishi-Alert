import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import(`./home/home.module`).then((m) => m.HomeModule),
  },
  {
    path: "commodities",
    loadChildren: () =>
      import(`./commodities/commodities.module`).then((m) => m.CommoditiesModule),
  },
  {
    path: "",
    loadChildren: () =>
      import(`./home/home.module`).then((m) => m.HomeModule),
  },
  {
    path: "**",
    loadChildren: () =>
      import(`./home/home.module`).then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
