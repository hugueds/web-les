import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-station',
  templateUrl: './work-station.component.html',
  styleUrls: ['./work-station.component.css']
})
export class WorkStationComponent implements OnInit {

  positions = [1, 2, 3, 4, 5, 6]

  activePositions = [[]]

  messageLength = 0;

  instructions = [
    {'type': 'text' , message: 'Lorem ipsum fames bibendum convallis eros velit erat urna sit sagittis sagittis ipsum aptent inceptos egestas commodo laoreet mollis amet. faucibus hac litora rutrum suspendisse laoreet platea at iaculis, tristique maecenas ante netus urna faucibus himenaeos laoreet platea'},
    // {'type': 'par' , message: 'sagittis ipsum aptent inceptos egestas commodo laoreet mollis amet. faucibus hac litora rutrum suspendisse '},
    // {'type': 'text' , message: 'laoreet platea at iaculis, tristique maecenas ante netus urna faucibus himenaeos'},
    // {'type': 'par' , message: 'pellentesque augue ut senectus auctor porta enim. blandit quisque curabitur taciti '},
    // {'type': 'text' , message: 'curabitur egestas ad vivamus aliquam, tristique feugiat dictumst nostra lacus sociosqu hac '},
    // {'type': 'par' , message: 'at aliquam, mattis tellus suscipit eleifend morbi velit nisi. diam vehicula libero ipsum est'},
    // {'type': 'text' , message: 'platea dapibus etiam diam aptent, vehicula bibendum est id vestibulum purus nulla '},
    // {'type': 'par' , message: 'rutrum, facilisis posuere pretium vel aliquam metus quisque ut. '},
    // {'type': 'par' , message: 'rutrum, facilisis posuere pretium vel aliquam metus quisque ut. '},
  ]

  constructor() { }

  ngOnInit(): void {
    this.activePositions[0] = this.positions.filter(x => x % 2 != 0);
    this.activePositions[1] = this.positions.filter(x => x % 2 == 0);
    let messages = this.instructions.map(x => x.message);
    let chr = messages.join()
    this.messageLength = chr.length;

  }

}
