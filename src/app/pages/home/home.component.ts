import { MenuBarComponent } from './../../components/menu-bar/menu-bar.component';
import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-home',
  imports: [MenuBarComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
