import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'web-les';
  hasVariants = true;
  config: any;

  ngOnInit() {

  }

  loadConfig() {

    // 1 check if configuration is in the localstorage
    // 2 check request the configuration
    // 3 load an error page saying the config is not available and waits for network connection with the server
    
  }

}
