import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  @Input() side: string;
  @Input() positions: Array<number>;
  @Input() instructions: Array<any>;

  constructor() { }

  ngOnInit(): void {
    // Get the total number os characters
    // Get the total number of a single message
    // If it is a picture, display only the picture
  }

}
