import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    // Define an animation trigger for the timeline content
    trigger('contentAnimation', [
      // Define two states: enter and leave
      state('enter', style({ opacity: 1, transform: 'translateX(0)' })),
      state('leave', style({ opacity: 0, transform: 'translateX(-100%)' })),
      // Define the transitions between the states
      transition('void => enter', [
        // Start with the leave state
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        // Animate to the enter state
        animate('500ms ease-in')
      ]),
      transition('enter => void', [
        // Animate to the leave state
        animate('500ms ease-out', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class ResumeComponent {
  @Input() workExperiences: any;
  constructor() {
    console.log(this.workExperiences)
  }




}
