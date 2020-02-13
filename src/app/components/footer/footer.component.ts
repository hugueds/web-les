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
    this.footer.maxTakt = 20;
    this.footer.taktTime = 20;
    this.footer.andonStatus = 0;
    this.footer.andonMessage = "FA 2 POSTO 3 AP 11";
    this.subscriber = _taktService.getTakt().subscribe((a) => this.updateTakt(a));
  }

  ngOnInit(): void {


  }

  updateTakt(value) {
    this.footer.taktTime -= 1;
    this.footer.taktString = this.msToTimeString(this.footer.taktTime * 1000);

    if (this.footer.taktTime < 15) {
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

  msToTimeString = function (ms) {

    const t = [0, 0, 0];
    const negative = ms < 0;
    let timeString = '';
    ms = Math.abs(ms);

    t[0] = Math.floor(ms / 1000 / 60 / 60);
    t[1] = Math.floor(ms / 1000 / 60) % 60;
    t[2] = (ms / 1000) % 60;

    timeString = (t[0] > 0 ? t[0] + ":" : "") + (t[1] < 10 ? "0" + t[1] : t[1]) + ":" + (t[2] < 10 ? "0" + t[2] : t[2]);

    if (negative)
      return "-" + timeString;

    return timeString;
  }

}
