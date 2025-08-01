import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'ds-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [
    TranslateModule,
  ],
})

/**
 * Component displaying the About Information
 */
export class AboutComponent  {
}
