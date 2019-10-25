import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-post',
  templateUrl: './service-post.component.html',
  styleUrls: ['./service-post.component.css']
})
export class ServicePostComponent implements OnInit {

  @Input() servicepost: any;

  constructor() { }

  ngOnInit() {
  }

}
