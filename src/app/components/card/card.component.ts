import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PricingComponent } from "./pricing/pricing.component";
import { LabelComponent } from "./label/label.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [MatCardModule, PricingComponent, LabelComponent],
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

	@Input()
	gameCover:string = ""
	@Input()
	gameLabel:string=""
	@Input()
	gameType:string ="XPTO | PS4"
	@Input()
	gamePrice:string = "R$ 399,90"

  constructor() { }

  ngOnInit(): void {
  }

}
