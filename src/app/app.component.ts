import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { AosService } from './common/services/AosService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'karthick-web-works';
  constructor(private aosService: AosService, private elementRef: ElementRef){}
  ngOnInit(){
    //Aos.init({disable: 'mobile'});//AOS - 2
    //Aos.refresh();
    if (typeof window !== 'undefined') {
      this.aosService.init();
    }
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      const elements = this.elementRef.nativeElement.querySelectorAll('[data-aos]');
      elements.forEach((element: HTMLElement) => {
        this.aosService.refreshElement(element);
      });
    }
  }


  openMobileNav(){
    document.getElementsByTagName('body')[0].classList.toggle('mobile-nav-active');
    document.getElementsByClassName('mobile-nav-toggle')[0].classList.toggle('bi-list');
    document.getElementsByClassName('mobile-nav-toggle')[0].classList.toggle('bi-x');
  }
}
