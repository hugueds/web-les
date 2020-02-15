import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  @Input() side: string;
  @Input() positions: Array<number>;

  constructor() { }

  ngOnInit(): void {
    
  }

}
