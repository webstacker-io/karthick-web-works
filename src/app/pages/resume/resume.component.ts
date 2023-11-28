import { Component, OnInit } from '@angular/core';
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
  workExperiences=[
    {
      company: 'HTC Global Services',
      role: 'Senior Technical Lead',
      startDate: 'May 2023',
      endDate: 'Present',
      description: 'Developed web applications using Angular, Next.js, Vue.js, JAMstack, React.js'
    },
    {
      company: 'HCL, Chennai',
      role: 'Senior Technical Lead',
      startDate: 'June 2022',
      endDate: 'May 2023',
      description: 'Lead in the executing the plan with the team members to implement the better solutions on the front.'
    },
    {
      company: 'Photon Infotech PVT LTD, Chennai',
      role: 'Tech Lead',
      startDate: 'Aug 2019',
      endDate: 'June 2022',
      description: 'Built application platform foundation to support migration from client-server product lines to enterprise architectures and services'
    },
    {
      company: 'RR Donnelley, Chennai',
      role: 'Senior Software Consultant',
      startDate: 'Feb 2018',
      endDate: 'Aug 2019',
      description: 'Designed and implemented solutions on time and within budget while delivering high quality services'
    },
    {
      company: 'High Peak Software, Bengaluru',
      role: 'Senior Software Engineer',
      startDate: 'June 2017',
      endDate: 'Feb 2018',
      description: 'Built outstanding and dynamic team of software engineers and developers which significantly boosted overall success of organization'
    },
    {
      company: 'Evoke Technologies, Hyderabad',
      role: 'Senior Technical Associate',
      startDate: 'May 2016',
      endDate: 'May 2017',
      description: 'Enhanced and reconstructed computer systems resulting in 50% increased efficiency for business end-users'
    },
    {
      company: 'Techversant Infotech, Trivandrum',
      role: 'Senior Software Engineer',
      startDate: 'Dec 2013',
      endDate: 'Aug 2015',
      description: 'Worked with project managers, developers,quality assurance and customers to resolve technical issues'
    },
    {
      company: 'Mitrahsoft, Kovilpatti',
      role: 'Software Engineer',
      startDate: 'July 2011',
      endDate: 'Dec 2013',
      description: 'Collaborated with cross-functional development team members to analyze Researched, designed and implemented scalable client requirements.'
    }
  ];
  constructor() { }




}
