import {Component} from '@angular/core';
import {MenuItem} from 'app/model/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  menuItem = MenuItem.MENU_ITEM;
}
