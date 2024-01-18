import { Component } from '@angular/core';
import { NavbarComponent as BaseComponent } from 'src/app/navbar/navbar.component';
import { slideMobileNav } from 'src/app/shared/animations/slide';

/**
 * Component representing the public navbar
 */
@Component({
  selector: 'ds-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
  animations: [slideMobileNav]
})
export class NavbarComponent extends BaseComponent {
}
