import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-technology',
  templateUrl: 'technology.component.html'
})
export class TechnologyComponent implements OnInit {
  protected technologys: Technology[];

  constructor() { }

  ngOnInit() {

    this.technologys = [
      {
        title: 'html5',
        icon: 'devicon-html5-plain-wordmark'
      },
      {
        title: 'css',
        icon: 'devicon-css3-plain-wordmark'
      },
      {
        title: 'sass',
        icon: 'devicon-sass-plain'
      },
      {
        title: 'bootstrap',
        icon: 'devicon-bootstrap-plain'
      },
      {
        title: 'javascript',
        icon: 'devicon-javascript-plain'
      },
      {
        title: 'jquery',
        icon: 'devicon-jquery-plain-wordmark'
      },
      {
        title: 'angular',
        icon: 'devicon-angularjs-plain'
      },
      {
        title: 'gulp',
        icon: 'devicon-gulp-plain'
      },
      {
        title: 'bower',
        icon: 'devicon-bower-line-wordmark'
      },
      {
        title: 'apache',
        icon: 'devicon-apache-plain-wordmark'
      },
      {
        title: 'php',
        icon: 'devicon-php-plain'
      },
      {
        title: 'codeigniter',
        icon: 'devicon-codeigniter-plain-wordmark'
      },
      {
        title: 'drupal',
        icon: 'devicon-drupal-plain-wordmark'
      },
      {
        title: 'doctrine',
        icon: 'devicon-doctrine-line-wordmark'
      },
      {
        title: 'mysql',
        icon: 'devicon-mysql-plain-wordmark'
      },
      {
        title: 'google',
        icon: 'devicon-google-plain'
      },
      {
        title: 'facebook',
        icon: 'devicon-facebook-plain'
      },
      {
        title: 'photoshop',
        icon: 'devicon-photoshop-line'
      },
      {
        title: 'linux',
        icon: 'devicon-linux-plain'
      },
      {
        title: 'debian',
        icon: 'devicon-debian-plain-wordmark'
      },
      {
        title: 'apple',
        icon: 'devicon-apple-plain'
      },
      {
        title: 'git',
        icon: 'devicon-git-plain-wordmark'
      },
      {
        title: 'github',
        icon: 'devicon-github-plain-wordmark'
      },
      {
        title: 'gitlab',
        icon: 'devicon-gitlab-plain-wordmark'
      }
    ];
  }

}

interface Technology {
  title: string;
  icon: any;
}
