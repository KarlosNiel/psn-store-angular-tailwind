import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PricingComponent } from "./pricing/pricing.component";
import { LabelComponent } from "./label/label.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [CommonModule, MatCardModule, PricingComponent, LabelComponent],
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

	@Input()
	gameCover:string = "assets/ac-cover.jpg"
	@Input()
	gameLabel:string="Exclusive"
	@Input()
	gameType:string ="XPTO | PS4"
	@Input()
	gamePrice:string = "R$ 399,90"

  constructor() { }

  ngOnInit(): void {
  }

}
