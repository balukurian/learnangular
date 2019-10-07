import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdDirective} from '../ad.directive';
import {AdItem} from '../model/AdItem';
import {AdComponent} from '../ad/ad.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  interval: any;
  currentAdIndex = -1;
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as AdComponent).data = adItem.data;
  }

  ngOnInit() {
    this.getAds();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
