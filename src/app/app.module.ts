  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyAdressesComponent } from './my-adresses/my-adresses.component';
import { ShipmentDeliveryWidgetComponent } from './shipment-delivery-widget/shipment-delivery-widget.component';
import { PayableShipmentsComponent } from './payable-shipments/payable-shipments.component';
import { ActiveShipmentComponent } from './active-shipment/active-shipment.component';
import { LottieModule } from 'ngx-lottie';
import  player  from 'lottie-web';  
export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MyProfileComponent,
    MyAdressesComponent,
    ShipmentDeliveryWidgetComponent,
    PayableShipmentsComponent,
    ActiveShipmentComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    //RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
    //)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
