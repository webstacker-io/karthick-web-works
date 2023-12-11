import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/app/common/services/content.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {
  }

}
