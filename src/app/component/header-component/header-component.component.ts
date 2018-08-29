import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slider=[
  {"img":"assets/slider/slider-image1.jpg","imgHeader":"Header-section1","imgContent":"Actual img content"},
  {"img":"assets/slider/slider-image2.jpg","imgHeader":"Header-section2","imgContent":"Actual img content"},
  {"img":"assets/slider/slider-image3.jpg","imgHeader":"Header-section3","imgContent":"Actual img content"},
  {"img":"assets/slider/slider-image4.jpg","imgHeader":"Header-section4","imgContent":"Actual img content"}
  ];
  selectedItem(data){
  console.log(data);
  }
}
