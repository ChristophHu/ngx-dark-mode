import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxDarkModeTheme } from '../../models/theme';
import { NgxDarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'ngx-dark-mode',
  imports: [
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './dark-mode.component.html',
  styleUrl: './dark-mode.component.sass'
})
export class NgxDarkModeComponent {
  constructor(private _ngxDarkModeService: NgxDarkModeService) {}

  toggleTheme() {
    this._ngxDarkModeService.toggleTheme()
  }
  getTheme(): Observable<NgxDarkModeTheme> {
    return this._ngxDarkModeService.theme$
  }
}
