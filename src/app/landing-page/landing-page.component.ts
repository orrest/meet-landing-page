import { Component } from '@angular/core';
import { NumberComponent } from '../components/number/number.component';
import { ButtonComponent } from "../components/button/button.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NumberComponent, ButtonComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
