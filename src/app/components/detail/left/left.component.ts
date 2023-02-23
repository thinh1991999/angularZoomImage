import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss'],
})
export class LeftComponent {
  @Input() imgs: any[] = [];
  activeIdx = 0;
  showModal: boolean = false;
  showImgScope: boolean = false;
  positionScope: string = '0% 0%';
  topScope: string = '0px';
  leftScope: string = '0px';
  class: object = {};
  timeOut: any;
  constructor() {}
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
    const { target, clientX, clientY } = e;
    if (target) {
      this.timeOut = setTimeout(() => {
        const { offsetHeight, offsetWidth } = target as HTMLDivElement;
        const { left, top } = (
          target as HTMLDivElement
        ).getBoundingClientRect();

        const cx = offsetWidth / 200;
        const cy = offsetHeight / 200;
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
        this.topScope = `${yLens}px`;
        this.leftScope = `${yLens}px`;
        const position = '-' + xLens * cx + 'px -' + yLens * cy + 'px';
        this.positionScope = position;
      }, 5);
    }
  }
}
