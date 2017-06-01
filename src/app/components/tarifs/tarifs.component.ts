import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.css']
})
export class TarifsComponent implements OnInit {
  tarif1_rows = [
    {name: 'Austin', time1: 'Male', time2: 'Swimlane', time3: 'a'},
    {name: 'Dany', time1: 'Male', time2: 'KFC', time3: 'c'},
    {name: 'Molly', time1: 'Female', time2: 'Burger King', time3: 'b'},
  ];
  tarif1_columns = [
    {prop: 'name'},
    {name: '30m', prop: 'time1' },
    {name: '1h', prop: 'time2'},
    {name: '1h30', prop: 'time3' }
  ];

  tarif2_rows = [
    {name: 'Austin', gender: 'Male', company: 'Swimlane'},
    {name: 'Dany', gender: 'Male', company: 'KFC'},
    {name: 'Molly', gender: 'Female', company: 'Burger King'},
  ];
  tarif2_columns = [
    {prop: 'name'},
    {name: 'Gender'},
    {name: 'Company'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
