import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'theme';
  readonly darkModeSignal = signal<ThemeMode>(this.detectInitialTheme());
  readonly isDarkMode = this.darkModeSignal.asReadonly();

  constructor() {
    this.apply(this.darkModeSignal(), false);
  }

  get mode(): ThemeMode {
    return this.isDarkMode();
  }

  setDarkModeSignal(mode: ThemeMode): void {
    if (mode === this.darkModeSignal()) {
      return;
    }
    this.darkModeSignal.set(mode);
    this.apply(mode, true);
  }

  toggleDarkMode(): void {
    this.setDarkModeSignal(this.isDarkMode() === 'dark' ? 'light' : 'dark');
  }

  private detectInitialTheme(): ThemeMode {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch {}

    const prefersDark =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  private apply(mode: ThemeMode, persist: boolean): void {
    const root = document.documentElement;
    if (!root) {
      return;
    }
    try {
      if (mode === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      if (persist) {
        localStorage.setItem(this.storageKey, mode);
      }
    } catch {
      // no-op
    }
  }
}
