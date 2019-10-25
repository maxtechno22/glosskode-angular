import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  feature = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.feature = this.getFeature();
  }

  getFeature() {
    return this.config.getConfig().feature;
  }

}
