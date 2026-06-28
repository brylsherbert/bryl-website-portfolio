import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  ChangeDetectionStrategy,
  signal,
  effect,
} from '@angular/core';
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
import { ProjectItemComponent } from './components/project-item/project-item.component';

@Component({
  selector: 'app-home-page',
  imports: [NgIcon, ...HlmIconImports, ProjectItemComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.Eager,
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

  protected readonly projectSwiperAutoplay = {
    delay: 3500,
    disableOnInteraction: false,
  };

  private _skillTechStacks = signal([
    'Node.js',
    'Angular',
    'Express.js',
    'PostgreSQL',
    'MongoDB',
    'Ionic',
    'Docker',
    'Capacitor',
    'TypeScript',
    'TailwindCSS',
  ]);

  private _services = signal([
    'Full-Stack Web Development',
    'Front-end Development',
    'Ionic Mobile Development',
    'API Integration',
    'Performance Optimization',
    'Figma to Code',
  ]);

  private _tools = signal([
    'Git',
    'Cursor',
    'Xcode',
    'Android Studio',
    'Postman',
    'GitLab',
  ]);

  private _featuredProject = signal({
    name: 'PennyWise',
    description:
      "A Financial Management Platform built to help small businesses easily manage their expenses and budgets. Designed as a free-to-use solution, it empowers users to organize spending, create and track budgets, and monitor financial health with clear reports and insights—all in one secure and user-friendly app.",
    techStacks: [
      'PostgreSQL',
      'Node.js',
      'Express.js',
      'Docker',
      'JWT',
      'Rate Limiting',
      'Zod',
      'Angular',
      'Ionic',
      'Capacitor',
      'TypeScript',
    ],
    imageUrl: 'assets/images/pennywise-app/budgets-page.png',
    projectUrl: 'https://github.com/brylsherbert/pennywise-backend',
    liveUrl: 'https://usepennywise.netlify.app',
    liveLabel: 'Netlify',
    liveNote: 'View the hosted PennyWise demo on Netlify.',
  });

  private _apps = signal([
    {
      id: 1,
      name: 'Jet Stream App',
      description:
        'An application using The Movie Database (TMDB) to see top rated movies, search for your favorite movies, and get detailed information about any movie.',
      techStacks: ['Angular v19', 'Ionic v8', 'Capacitor v7', 'TMDb API'],
      imageUrl: 'assets/images/jet-stream-app.png',
      projectUrl: 'https://github.com/brylsherbert/jet-stream-app',
      liveUrl: '',
      liveLabel: '',
      liveNote: '',
    },
    {
      id: 2,
      name: 'Weather Forecast App',
      description:
        'A weather forecast web application, crafted to deliver information for any location globally.',
      techStacks: ['Angular v21', 'Tailwind CSS v4', 'Weather API'],
      imageUrl: 'assets/images/weather-app/home-page-web.png',
      projectUrl: '',
      liveUrl: 'https://weather-forecast-angular-bryl.netlify.app/',
      liveLabel: 'Live Demo',
      liveNote: '',
    },
    {
      id: 3,
      name: 'PennyWise',
      description:
        'A Financial Management Platform built to help small businesses easily manage their expenses and budgets.',
      techStacks: [
        'PostgreSQL',
        'Node.js',
        'Express.js',
        'Docker',
        'Angular',
        'Ionic',
        'Capacitor',
        'TypeScript',
      ],
      imageUrl: 'assets/images/pennywise-app/budgets-page.png',
      projectUrl: '',
      liveUrl: 'https://usepennywise.netlify.app',
      liveLabel: 'Live App',
    },
  ]);

  protected skillTechStacks = this._skillTechStacks.asReadonly();
  protected services = this._services.asReadonly();
  protected tools = this._tools.asReadonly();
  protected featuredProject = this._featuredProject.asReadonly();
  protected apps = this._apps.asReadonly();

  constructor() {
    effect(() => {
      console.log('Apps: ', this.apps());
      
    })
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }
}
