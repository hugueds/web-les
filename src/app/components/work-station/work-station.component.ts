import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-station',
  templateUrl: './work-station.component.html',
  styleUrls: ['./work-station.component.css']
})
export class WorkStationComponent implements OnInit {

  positions = [1, 2, 3, 4, 5, 6]

  activePositions = [[]]

  constructor() { }

  ngOnInit(): void {
    this.activePositions[0] = this.positions.filter(x => x % 2 != 0);
    this.activePositions[1] = this.positions.filter(x => x % 2 == 0);
  }

}
