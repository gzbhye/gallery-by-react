import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-ise';
  en = true;
  zh = false;
  cookieLocale = '';
  defaultLang = 'en_US';
  constructor(private cookieService: CookieService, private translate: TranslateService) {
    this.cookieLocale = this.cookieService.get('agilent_locale') || this.defaultLang;
    if (this.cookieLocale.indexOf('en') !== -1 || this.cookieLocale === '') {
      this.cookieLocale = this.defaultLang;
    }
    // Fallback lang
    this.translate.setDefaultLang(this.defaultLang);
    this.translate.use(this.cookieLocale);
  }
}
