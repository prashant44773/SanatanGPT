import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
	features: Feature[] = [
		{ title: 'Scripture Knowledge', description: 'Explore the wisdom of Vedas, Upanishads, Bhagavad Gita, and more.' },
		{ title: 'Personalized Lessons', description: 'Get tailored life lessons based on your unique queries.' },
		{ title: 'Interactive Learning', description: 'Engage with teachings through AI-powered conversations.' },
		// You can add more features here
	  ];
}
export interface Feature {
	title: string;
	description: string;
  }