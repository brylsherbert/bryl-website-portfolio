import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-project-item',
  imports: [],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItemComponent {
  appName = input.required<string>();
  appDescription = input.required<string>();
  techStacks = input.required<string[]>();
  imageUrl = input<string>('');
  projectUrl = input<string>('');
}
