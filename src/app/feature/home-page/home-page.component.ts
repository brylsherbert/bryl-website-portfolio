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
import { ProjectItemComponent } from "./components/project-item/project-item.component";

@Component({
  selector: 'app-home-page',
  imports: [NgIcon, ...HlmIconImports, ProjectItemComponent],
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

  jetStreamApp = {
    "name": 'Movie Search App',
    "description": 'See top rated movies, search for your favorite movies, and get detailed information about each movie.',
    "techStacks": ['Angular v19', 'Ionic v8', 'Capacitor v7', 'TMDb API'],
    "imageUrl": "assets/images/jet-stream-app.png",
    "projectUrl": "https://github.com/brylsherbert/jet-stream-app"
  }

  weatherApp = {
    "name": 'Weather Forecast App',
    "description": 'A feature-rich weather forecast application designed to deliver detailed meteorological information for any location globally.',
    "techStacks": ['Angular v21', 'Tailwind CSS v4', 'Weather API'],
    "imageUrl": "assets/images/weather-app/home-page-web.png",
    "projectUrl": "https://weather-forecast-angular-bryl.netlify.app/"
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }
}
