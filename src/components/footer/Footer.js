import {AppComponent} from '@core/AppComponent';

export class Footer extends AppComponent {
  static className = 'page__footer'
  toHTML() {
    return '<h1>Footer</h1>'
  }
}
