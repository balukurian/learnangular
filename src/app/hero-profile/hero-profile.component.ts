import {Component, Input, OnInit} from '@angular/core';
import {AdComponent} from '../ad/ad.component';

@Component({
  selector: 'app-hero-profile',
  template: `
    <div class="job-ad">
    <h4>{{data.name}}</h4>
        {{data.bio}}
        </div>
  `,
})
export class HeroProfileComponent implements AdComponent {

  @Input() data: any;

  constructor() {
  }

}
