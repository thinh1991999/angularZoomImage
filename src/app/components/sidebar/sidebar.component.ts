import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() navs: any[] = [];
  @Output() close = new EventEmitter();
  show: boolean = true;

  handleClose() {
    this.close.emit();
  }
}
