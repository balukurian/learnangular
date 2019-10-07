import {Component, Input, OnInit} from '@angular/core';
import {AdComponent} from '../ad/ad.component';

@Component({
  selector: 'app-hero-job-ad',
  template: `<div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{data.headline}}</h4>

      <p>{{data.body}}</p>

      <strong>Hire this hero today!</strong>
    </div>`,

})
export class HeroJobAdComponent implements AdComponent {

  @Input() data: any;

  constructor() {
  }

}
