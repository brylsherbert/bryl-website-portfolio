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
    'React',
    'React Native',
    'Flutter',
    'Express.js',
    'Stripe',
    'PayMongo',
    'PostgreSQL',
    'MongoDB',
    'Ionic',
    'Docker',
    'Capacitor',
    'TypeScript',
    'TailwindCSS',
  ]);

  private _services = signal([
    'Cross-Platform Development',
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

  private _tvStartupProductionApps = signal([
    {
      name: 'Takeover TV',
      appStoreUrl: 'https://apps.apple.com/us/app/takeover-tv/id1632365369',
      playStoreUrl: '',
    },
    {
      name: 'Health News Network',
      appStoreUrl: '',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.healthnewsnetwork.app',
    },
  ]);

  private _featuredProject = signal({
    name: 'CourtBook',
    description:
      'A full-stack sports venue booking platform for discovering pickleball courts in Cebu, reserving courts online, and managing venues, bookings, and users from an admin dashboard. Includes payment integrations with Stripe and PayMongo (GCash) for checkout and booking flows. Built with a modular Angular frontend and a layered Express API backed by PostgreSQL—currently in active development and live testing.',
    techStacks: [
      'PostgreSQL',
      'Prisma',
      'Node.js',
      'Express.js',
      'Stripe',
      'PayMongo',
      'Docker',
      'JWT',
      'Zod',
      'Angular',
      'Spartan UI',
      'Tailwind CSS',
      'TypeScript',
    ],
    imageUrl: 'assets/images/courtbook/courtbookcebu-admin-dashboard.png',
    projectUrl: '',
    liveUrl: 'https://courtbookcebu.netlify.app',
    liveLabel: 'Netlify',
    liveNote: 'Live testing deployment on Netlify.',
  });

  private _apps = signal([
    {
      id: 4,
      name: 'CourtBook',
      description:
        'Sports venue booking platform for Cebu pickleball courts—browse venues, reserve courts, and manage bookings and users, with Stripe and PayMongo (GCash) payment integration. In progress; live on Netlify for testing.',
      techStacks: [
        'PostgreSQL',
        'Prisma',
        'Node.js',
        'Express.js',
        'Stripe',
        'PayMongo',
        'Angular',
        'Spartan UI',
        'TypeScript',
        'Tailwind CSS',
      ],
      imageUrl: 'assets/images/courtbook/courtbookcebu-admin-dashboard.png',
      projectUrl: '',
      liveUrl: 'https://courtbookcebu.netlify.app',
      liveLabel: 'Netlify',
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
  ]);

  protected skillTechStacks = this._skillTechStacks.asReadonly();
  protected services = this._services.asReadonly();
  protected tools = this._tools.asReadonly();
  protected featuredProject = this._featuredProject.asReadonly();
  protected apps = this._apps.asReadonly();
  protected tvStartupProductionApps = this._tvStartupProductionApps.asReadonly();

  constructor() {
    effect(() => {
      console.log('Apps: ', this.apps());
      
    })
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }
}
