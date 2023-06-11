import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  appExample01Interpolation = true;
  appNgif = false;
  appNgfor = false;
  appNgswitch = false;
  appAttributeDirectives = false;
  appReview = false;

  /**
   * vai selecionar o app vindo do select
   * @param $event
   */
  selectApp(event: any): void {
    this.appExample01Interpolation = event.srcElement.value === 'appExample01Interpolation';
    this.appNgif = event.srcElement.value === 'appNgif';
    this.appNgfor = event.srcElement.value === 'appNgfor';
    this.appNgswitch = event.srcElement.value === 'appNgswitch';
    this.appAttributeDirectives = event.srcElement.value === 'appAttributeDirectives';
    this.appReview = event.srcElement.value === 'appReview';
  }
}
