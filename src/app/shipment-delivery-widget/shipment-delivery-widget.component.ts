import { Component, NgModule, OnInit } from '@angular/core';
  //import lottieWeb from '@angular/node_module/'
  import { AnimationOptions } from 'ngx-lottie';
  
@Component({
  selector: 'app-shipment-delivery-widget',
  templateUrl: './shipment-delivery-widget.component.html',

  styleUrls: ['./shipment-delivery-widget.component.css','../home/home.component.css']
})

export class ShipmentDeliveryWidgetComponent implements OnInit {

  options: AnimationOptions = {
    path: './assets/img/animation.json'
  };

  constructor() { }

  ngOnInit(): void {

  }
;


}
