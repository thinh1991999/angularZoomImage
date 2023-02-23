import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logo = 'sneakers';
  navData = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  showSideBar: boolean = false;

  handleShow() {
    this.showSideBar = true;
  }

  handleClose() {
    this.showSideBar = false;
  }
}
