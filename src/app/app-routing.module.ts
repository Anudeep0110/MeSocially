import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component'
import { CardsComponent } from './Components/cards/cards.component'
import { FooterComponent } from './Components/footer/footer.component'

const routes: Routes = [
 {path: 'header', component: HeaderComponent},
 {path : 'cards', component: CardsComponent},
 {path : 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
