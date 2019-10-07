import {Component, OnInit} from '@angular/core';
import {AdService} from './ad.service';
import {AdItem} from './model/AdItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  ads: AdItem[];
  constructor(public adService: AdService) {}

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }

}
