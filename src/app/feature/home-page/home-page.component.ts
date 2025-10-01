import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideBox,
  lucideBraces,
  lucideBriefcaseBusiness,
  lucideCalendar,
  lucideDownload,
  lucideGithub,
  lucideLinkedin,
  lucideMail,
  lucideMapPin,
  lucideMoon,
  lucideNewspaper,
  lucideSmartphone,
  lucideSun,
  lucideWrench,
} from '@ng-icons/lucide';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-home-page',
  imports: [NgIcon, ...HlmIconImports],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideIcons({
      lucideGithub,
      lucideLinkedin,
      lucideMail,
      lucideCalendar,
      lucideMoon,
      lucideSun,
      lucideMapPin,
      lucideBriefcaseBusiness,
      lucideBraces,
      lucideBox,
      lucideWrench,
      lucideSmartphone,
      lucideNewspaper,
      lucideDownload,
    }),
  ],
})
export class HomePageComponent {
  protected themeService = inject(ThemeService);
  currentTheme = this.themeService.isDarkMode;

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }
}
