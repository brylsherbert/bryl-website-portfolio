import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  ChangeDetectionStrategy,
  signal,
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

  protected skillTechStacks = signal([
    'Node.js',
    'PostgreSQL',
    'Express.js',
    'Angular',
    'Ionic',
    'Docker',
    'Capacitor',
    'TypeScript',
    'TailwindCSS',
  ]);

  protected services = signal([
    'Full-Stack Web Development',
    'Front-end Development',
    'Ionic Mobile Development',
    'API Integration',
    'Performance Optimization',
    'Figma to Code',
  ]);

  protected tools = signal([
    'Git',
    'Cursor',
    'Xcode',
    'Android Studio',
    'Postman',
    'GitLab',
  ]);

  protected featuredProject = signal({
    name: 'PennyWise',
    description:
      'A full-stack personal finance app with budget tracking, category management, account flows, reports, budget health indicators, authentication, validation, and deployment-ready backend infrastructure.',
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
    projectUrl: '',
    liveUrl: 'https://usepennywise.netlify.app',
    liveLabel: 'Live App',
    liveNote: 'View the hosted PennyWise demo on Netlify.',
  });

  protected apps = signal([
    {
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
      name: 'PennyWise',
      description:
        'PennyWise is a budget expense tracker for managing budgets, categories, accounts, and expense, income, and fill transactions with summaries, reports, budget health, and profile settings.',
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
  ])

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }
}
