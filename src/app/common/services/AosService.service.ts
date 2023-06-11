import { Injectable } from '@angular/core';

declare var require: any;

@Injectable({
  providedIn: 'root'
})
export class AosService {
  private aos: any;

  constructor() {
    // Load 'aos' library only in the browser environment
    if (typeof window !== 'undefined') {
      this.aos = require('aos');
    }
  }

  init(): void {
    if (this.aos) {
      this.aos.init();
    }
  }

  refreshElement(element: HTMLElement): void {
    if (this.aos) {
      this.aos.refreshElement(element);
    }
  }
}
