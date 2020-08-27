import {AppComponent} from '@core/AppComponent';

export class Header extends AppComponent {
  static className = 'page__header'
  toHTML() {
    return '<h1>Header</h1>'
  }
}
