import { Component, ElementRef, Input, NgZone, ViewChild } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss'],
})
export class LeftComponent {
  @ViewChild('mainImg', { read: ElementRef }) mainImgEL?: ElementRef;
  @ViewChild('lens') lensEL?: ElementRef;
  @Input() imgs: any[] = [];
  activeIdx = 0;
  showModal: boolean = false;
  showImgScope: boolean = false;
  positionScope: string = '0px 0px';
  topScope: string = '0px';
  leftScope: string = '0px';
  constructor(private zone: NgZone) {}
  ngOnInit() {
    console.log(this.imgs);
  }
  handleHover(idx: number) {
    this.activeIdx = idx;
  }

  handleShowModal() {
    this.showModal = !this.showModal;
  }
  onMouseenter() {
    this.showImgScope = true;
  }
  onMouseleave() {
    this.showImgScope = false;
  }
  onMousemove(e: MouseEvent) {
    this.zone.runOutsideAngular(() => {
      const { target, clientX, clientY } = e;
      const mainEl = this.mainImgEL?.nativeElement;
      if (target) {
        const { offsetHeight, offsetWidth } = mainEl;
        const { left, top } = mainEl.getBoundingClientRect();
        const cx = offsetWidth / 200;
        const cy = offsetHeight / 200;
        const imgLenW = cx * offsetWidth;
        const imgLenH = cy * offsetHeight;
        const x = clientX - left;
        const y = clientY - top;
        let xLens = x - 200 / 2;
        let yLens = y - 200 / 2;
        if (xLens > offsetWidth - 200) {
          xLens = offsetWidth - 200;
        }
        if (xLens < 0) {
          xLens = 0;
        }
        if (yLens > offsetHeight - 200) {
          yLens = offsetHeight - 200;
        }
        if (yLens < 0) {
          yLens = 0;
        }
        const position = '-' + xLens * cx + 'px -' + yLens * cy + 'px';
        if (this.lensEL) {
          this.lensEL.nativeElement.style.backgroundSize = `${imgLenW}px ${imgLenH}px`;
          this.lensEL.nativeElement.style.backgroundPosition = `${position}`;
          this.lensEL.nativeElement.style.left = `${xLens}px`;
          this.lensEL.nativeElement.style.top = `${yLens}px`;
        }
      }
    });
  }
}
