import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from '../../models/theme';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'dark-mode',
  imports: [
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './dark-mode.component.html',
  styleUrl: './dark-mode.component.sass'
})
export class DarkModeComponent {
  constructor(private _darkModeService: DarkModeService) {}

  toggleTheme() {
    this._darkModeService.toggleTheme()
  }
  getTheme(): Observable<Theme> {
    return this._darkModeService.theme$
  }
}
