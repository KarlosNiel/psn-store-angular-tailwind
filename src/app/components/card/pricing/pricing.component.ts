import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pricing',
  imports: [MatCardModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
	@Input()
	gameType:string ="Digital PS4"
	@Input()
	gamePrice:string = "R$ 399,90"
}
