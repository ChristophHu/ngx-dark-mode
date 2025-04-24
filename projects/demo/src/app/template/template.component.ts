import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { DarkModeService, DarkModeComponent, Theme } from '@christophhu/ngx-dark-mode';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [
    CommonModule,
    DarkModeComponent,
    FormsModule,
    ReactiveFormsModule
    
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.sass',
  providers: [
    DarkModeService
  ]
})
export class TemplateComponent {
  private _darkModeService: DarkModeService

  // needed for custom toggle button
  form: FormGroup

  constructor(@Inject(DarkModeService) _darkModeService: DarkModeService, private _fb: FormBuilder) {
    this._darkModeService = _darkModeService

    this.form = this._fb.group({
      darkMode: [true]
    })
  }

  toggleTheme() {
    this._darkModeService.toggleTheme()
  }
  getTheme(): Observable<Theme> {
    return this._darkModeService.theme$
  }

  isChecked : boolean = true
}
