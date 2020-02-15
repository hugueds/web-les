import { Component, OnInit } from '@angular/core';
import { TaktService } from 'src/app/services/takt.service';
import Footer from 'src/app/models/Footer';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  footer: Footer;
  subscriber;

  constructor(private _taktService: TaktService) {
    this.footer = new Footer();
    this.footer.maxTakt = 20000;
    this.footer.taktTime = 20000;
    this.footer.andonStatus = 0;
    this.footer.andonMessage = "FA 2 POSTO 3 AP 11";
    this.subscriber = _taktService.getTakt().subscribe((a) => this.updateTakt(a));
  }

  ngOnInit(): void {


  }

  updateTakt(value) {

    this.footer.taktTime -= 1000;    

    if (this.footer.taktTime < 15000) {
      this.footer.andonStatus = 1;
    }

    if (this.footer.taktTime < 0) {
      this.footer.andonStatus = 2;
    }

  }

  getBarPercentage() {
    const prct = this.footer.taktTime / this.footer.maxTakt * 100;
    return prct + '%';
  }

  getAndon() {
    if (this.footer.andonStatus == 0) {
      return 'footer--normal';
    } else if (this.footer.andonStatus == 1) {

      return 'footer--warning';
    } else if (this.footer.andonStatus == 2) {
      return 'footer--danger';

    }

  }

  

}
