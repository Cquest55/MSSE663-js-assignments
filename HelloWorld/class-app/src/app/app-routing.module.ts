// app-routing.module.ts
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PizzaAppComponent} from "./pizza-app/pizza-app.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pizzas',
    component: PizzaAppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
