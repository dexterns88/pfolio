import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-projects',
  templateUrl: 'projects.component.html'
})
export class ProjectsComponent implements OnInit {
  @Input() public project;

  constructor() { }

  ngOnInit() {}
}
