import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { ModalComponent } from '../modal/modal.component';
import { DetailModalComponent } from './detail-modal/detail-modal.component';

@NgModule({
  declarations: [
    DetailComponent,
    LeftComponent,
    RightComponent,
    ModalComponent,
    DetailModalComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [DetailComponent],
})
export class DetailModule {}
