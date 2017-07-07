import { Injectable } from '@angular/core';
import { projects } from '../../data/projects.data';

@Injectable()
export class ProjectsService {
  private _groups = [].concat(projects);

  getAll() {
    return this._groups;
  }

  getItem(id: number) {
    return this._groups[id];
  }
}
