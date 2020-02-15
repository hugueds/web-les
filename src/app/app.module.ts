import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VariantsComponent } from './components/variants/variants.component';
import { ChassisComponent } from './components/chassis/chassis.component';
import { WorkStationComponent } from './components/work-station/work-station.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PositionComponent } from './components/position/position.component';
import { environment } from '../environments/environment';

const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VariantsComponent,
    ChassisComponent,
    WorkStationComponent,
    PositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
