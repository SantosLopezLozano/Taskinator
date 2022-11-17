import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'People', url: '/folder/People', icon: 'people' },
    { title: 'Tasks', url: '/folder/Tasks', icon: 'file-tray-full' },
    { title: 'Assignments', url: '/folder/Assignments', icon: 'list' },
    { title: 'Task pane', url: '/folder/Task Panel', icon: 'layers' },
  ];
  public labels = [];

  language = 1
  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('es')
  }
  onLanguage() {
    this.language = (this.language + 1) % 2;
    switch (this.language)
  {}}
}

