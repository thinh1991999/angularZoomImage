import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent {
  @Input() imgs: any[] = [];
  @Output() close = new EventEmitter<boolean>();
  activeIdx: number = 0;
  handleHover(idx: number) {
    this.activeIdx = idx;
  }

  handleClose() {
    this.close.emit(false);
  }

  handleNext() {
    if (this.activeIdx === this.imgs.length - 1) {
      this.activeIdx = 0;
    } else {
      this.activeIdx++;
    }
  }
  handleBack() {
    if (this.activeIdx === 0) {
      this.activeIdx = this.imgs.length - 1;
    } else {
      this.activeIdx--;
    }
  }
}
