import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
 technicalSkills = [
    { name: 'Angular', level: 'Advanced' },
    { name: 'NextJs', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'ASP.NET Core', level: 'Intermediate' },
    { name: 'Ionic', level: 'Intermediate' },
    { name: 'Java', level: 'Advanced' },
    { name: 'C#', level: 'Intermediate' },
    { name: 'Python', level: 'Advanced' },
 
  ];
  softSkills = [
    { name: 'Communication', level: 'Advanced' },
    { name: 'Team Leadership', level: 'Advanced' },
    { name: 'Problem Solving', level: 'Advanced' },
    { name: 'Adaptability', level: 'Advanced' },
    { name: 'Time Management', level: 'Advanced' },
    { name: 'Project Management', level: 'Advanced' }
  ];

  languages = [
    { name: 'English', level: 'Professional' },
    { name: 'French', level: 'Professional' },
    { name: 'Arabic', level: 'Native' }
  ];
}
