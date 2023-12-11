import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { AosService } from './common/services/AosService.service';
import { LoadingService } from './common/services/loader.service';
import { ContentService } from './common/services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'karthick-web-works';

  constructor(private aosService: AosService, private elementRef: ElementRef,
    public loadingService: LoadingService, private cdr: ChangeDetectorRef){

    }
  ngOnInit(){
    this.loadingService.showLoader();
    if (typeof window !== 'undefined') {
      this.aosService.init();
    }
  }

  ngAfterViewInit(): void {
    this.loadingService.hideLoader();
    if (typeof window !== 'undefined') {
      const elements = this.elementRef.nativeElement.querySelectorAll('[data-aos]');
      elements.forEach((element: HTMLElement) => {
        this.aosService.refreshElement(element);
      });
    }
    this.cdr.detectChanges();
  }


  openMobileNav(){
    document.getElementsByTagName('body')[0].classList.toggle('mobile-nav-active');
    document.getElementsByClassName('mobile-nav-toggle')[0].classList.toggle('bi-list');
    document.getElementsByClassName('mobile-nav-toggle')[0].classList.toggle('bi-x');
  }
}
