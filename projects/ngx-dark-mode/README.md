# Ngx-Dark-Mode

## Frameworks and Languages
<p align="left">
  <img alt="Static Badge" src="https://img.shields.io/badge/19.2.0-000000?style=for-the-badge&logo=angular&logoColor=white&label=Angular&labelColor=000000"><br>
  <img alt="Static Badge" src="https://img.shields.io/badge/4.1.3-000000?style=for-the-badge&logo=tailwindcss&logoColor=white&label=Tailwind&labelColor=06B6D4&color=000000"><br>
  <img alt="Static Badge" src="https://img.shields.io/badge/5.7.2-000000?style=for-the-badge&logo=typescript&logoColor=white&label=Typescript&labelColor=007ACC&color=000000">
</p>

## Demo
<p align="center">
  <a href="https://christophhu.github.io/ngx-dark-mode-toggle"><img src="https://github.com/ChristophHu/ChristophHu/blob/main/assets/gif/ngx-dark-mode-toggle.gif" width="500" alt="image" /></a>
</p>

## Description
This Repository contains a simple Angular library for toggling between light and dark mode. It is designed to be easy to use and integrate into any Angular application.
It uses the `localStorage` API to save the user's preference for dark mode, so that the setting persists across page reloads.

## Installation
```bash
npm i @christophhu/ngx-dark-mode
```

## Use
### With default toggle
```html
<dark-mode></dark-mode>
```

### With custom toggle
```html
<dark-mode>
  <input type="checkbox" class="toggle" id="toggle" (change)="toggleTheme()"/>
</dark-mode>
```

```typescript
import { DarkModeService, DarkModeComponent, Theme } from "@christophhu/ngx-dark-mode-toggle";
import { DarkModeService } from '@christophhu/ngx-dark-mode';

@Component({
  ...
  imports: [
    DarkModeComponent
  ],
  providers: [
    DarkModeService
  ]
})
export class TestComponent {
  
  constructor(private _darkModeService: DarkModeService) {}

  toggleTheme() {
    this._darkModeService.toggleTheme()
  }
  getTheme(): Observable<Theme> {
    return this._darkModeService.theme$
  }
}
```
