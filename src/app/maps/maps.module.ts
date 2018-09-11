import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './google-map/google-map.component';
import { FullScreenMapComponent } from './full-screen-map/full-screen-map.component';

@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule,
    AgmCoreModule
  ],
  declarations: [GoogleMapComponent,FullScreenMapComponent]
})
export class MapsModule { }
