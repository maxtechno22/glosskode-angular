import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: any;

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.team = this.getTeam();
  }
  getTeam() {
    return this.config.getConfig().team;
  }
}
