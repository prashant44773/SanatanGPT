import { Component } from '@angular/core';
import { SharedModule } from '../../sharedModuels/shared.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navItems = [
    { label: 'Home', link: '#home', icon: 'home' },
    { label: 'Scriptures', link: '#scriptures', icon: 'auto_stories' },
    { label: 'Features', link: '#features', icon: 'star' },
    { label: 'FAQs', link: '#faqs', icon: 'help_outline' },
    { label: 'Explore', link: '#explore', icon: 'search', isButton: true },
  ];

}
