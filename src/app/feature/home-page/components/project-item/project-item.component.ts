import {
  Component,
  input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-project-item',
  imports: [],
  templateUrl: './project-item.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './project-item.component.css',
})
export class ProjectItemComponent {
  appName = input.required<string>();
  appDescription = input.required<string>();
  techStacks = input.required<string[]>();
  imageUrl = input<string>('');
  projectUrl = input<string>('');
  liveUrl = input<string>('');
  liveLabel = input<string>('Live App');
  featured = input(false);
}
