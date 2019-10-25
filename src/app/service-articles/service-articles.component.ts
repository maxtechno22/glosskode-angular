import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-service-articles',
  templateUrl: './service-articles.component.html',
  styleUrls: ['./service-articles.component.css']
})
export class ServiceArticlesComponent implements OnInit {

  servicepost = {};

  constructor(private route: ActivatedRoute, private config: ConfigService, private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.servicepost = this.getServicePostById(id);
  }
  getServicePostById(id: number) {
    return this.config.getServicePostByID(id);
  }
  getBack() {
    this.location.back();
  }
}
