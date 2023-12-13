import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnChanges, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ContentService } from 'src/app/common/services/content.service';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnChanges {
  age!: number;
  isDocumentLoaded: boolean = false;
  pageData: any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
          private cdref: ChangeDetectorRef,
          private elementRef: ElementRef,
          private renderer: Renderer2,
          private contentService: ContentService
  ) {
    this.pageData = this.contentService.getAppData().fields.pageData;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5 // 50% visibility triggers the callback
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetId = entry.target.getAttribute('id');
            this.setActiveLink(targetId || '');
          }
        });
      }, options);

      // Get all the sections/elements in the sidebar you want to observe
      const sections = document.querySelectorAll('.page-segment');

      // Observe each section
      sections.forEach((section) => {
        observer.observe(section);
      });
    }
  }
  ngOnChanges(){
    this.isDocumentLoaded = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    this.isDocumentLoaded = isPlatformBrowser(this.platformId);
    this.cdref.detectChanges();
  }
  setActiveLink(targetId: string) {
    const links = this.elementRef.nativeElement.parentElement.querySelectorAll('.nav-link');

    // Remove active class from all links
    links.forEach((link: any) => {
      this.renderer.removeClass(link, 'active');
    });

    // Add active class to the link with the matching target ID
    const activeLink = this.elementRef.nativeElement.parentElement.querySelector(`.nav-link[href="#${targetId}"]`);
    if (activeLink) {
      this.renderer.addClass(activeLink, 'active');
    }
  }

}
