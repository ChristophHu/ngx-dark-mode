import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgxDarkModeTheme } from '../models/theme';

@Injectable({
  providedIn: 'root'
})
export class NgxDarkModeService {
  body: any

  private readonly _theme = new BehaviorSubject<NgxDarkModeTheme>('dark')
  theme$: Observable<any> = this._theme.asObservable()

  constructor() {
    this.body = document.body
    this._theme.next(this.body.dataset['theme'] || localStorage['theme'] || 'dark')

    this.theme$.subscribe({
      next: (theme: NgxDarkModeTheme) => {
        if (theme) {
          localStorage.setItem('theme', theme)
          this.body.dataset['theme'] = theme
        }
      },
      error: () => {
        console.error('Error setting theme in localStorage')
      },
      complete: () => {
        localStorage.removeItem('theme')
      }
    })
  }

  toggleTheme() {
    this._theme.next(this.body.dataset['theme'] == 'dark' ? 'light' : 'dark')
  }
}
