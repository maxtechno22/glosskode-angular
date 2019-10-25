import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {


  constructor(private config: ConfigService, ngb: NgbCarouselConfig) {
    ngb.interval = 10000;
    ngb.wrap = true;
    ngb.keyboard = false;
    ngb.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
