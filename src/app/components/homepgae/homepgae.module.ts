import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepgaeRoutingModule } from './homepgae-routing.module';
import { HomepageComponent } from './homepage.component';
import { SliderComponent } from './slider/slider.component';
import { FleetComponent } from './fleet/fleet.component';
import { CarServiceComponent } from './car-service/car-service.component';
import { BusinessMoveComponent } from './business-move/business-move.component';
import { GlobalChauffeuredServicesComponent } from './global-chauffeured-services/global-chauffeured-services.component';
import { SafetyMattersComponent } from './safety-matters/safety-matters.component';


@NgModule({
  declarations: [
    HomepageComponent,
    SliderComponent,
    FleetComponent,
    CarServiceComponent,
    BusinessMoveComponent,
    GlobalChauffeuredServicesComponent,
    SafetyMattersComponent
  ],
  imports: [
    CommonModule,
    HomepgaeRoutingModule
  ]
})
export class HomepgaeModule { }
