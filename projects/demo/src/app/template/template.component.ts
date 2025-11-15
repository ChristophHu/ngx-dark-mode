import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { NgxDarkModeService, NgxDarkModeComponent, NgxDarkModeTheme } from '@christophhu/ngx-dark-mode';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [
    CommonModule,
    NgxDarkModeComponent,
    FormsModule,
    ReactiveFormsModule
    
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.sass',
  providers: [
    NgxDarkModeService
  ]
})
export class TemplateComponent {
  private _darkModeService: NgxDarkModeService

  // needed for custom toggle button
  form: FormGroup

  constructor(@Inject(NgxDarkModeService) _darkModeService: NgxDarkModeService, private _fb: FormBuilder) {
    this._darkModeService = _darkModeService

    this.form = this._fb.group({
      darkMode: [true]
    })
  }

  toggleTheme() {
    this._darkModeService.toggleTheme()
  }
  getTheme(): Observable<NgxDarkModeTheme> {
    return this._darkModeService.theme$
  }

  isChecked : boolean = true
}
