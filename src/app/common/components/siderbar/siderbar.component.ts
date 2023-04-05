import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss']
})
export class SiderbarComponent implements OnInit {

  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.currentRoute.snapshot.url.join('/'))
  }
  openMobileNav(){
    document.getElementsByTagName('body')[0].classList.toggle('mobile-nav-active');
    document.getElementsByClassName('mobile-nav-toggle')[0].classList.toggle('bi-list');
    document.getElementsByClassName('mobile-nav-toggle')[0].classList.toggle('bi-x');
  }

}
