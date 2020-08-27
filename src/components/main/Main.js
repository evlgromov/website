import {AppComponent} from '@core/AppComponent';

export class Main extends AppComponent {
  static className = 'page__main'
  toHTML() {
    return '<h1>Main</h1>'
  }
}
