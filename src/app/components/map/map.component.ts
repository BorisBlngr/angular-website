import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 43.44988037508711;
  lng = 6.755246576057421;
  zoom = 17;

  constructor() { }

  ngOnInit() {
  }
}
