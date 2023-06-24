import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  sizeApp = 1;

  isExample01 = false;
  isExample02 = false;
  isExample03 = false;
  isExample04 = false;
  isExample05 = false;
  isExample06 = false;
  isExample07 = true;
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
    this.isExample01 = event.srcElement.value === 'isExample01';
    this.isExample02 = event.srcElement.value === 'isExample02';
    this.isExample03 = event.srcElement.value === 'isExample03';
    this.isExample04 = event.srcElement.value === 'isExample04';
    this.isExample05 = event.srcElement.value === 'isExample05';
    this.isExample06 = event.srcElement.value === 'isExample06';
    this.isExample07 = event.srcElement.value === 'isExample07';
  }

  /**
   * vai selecionar o app vindo do select
   * @param $event
   */
  selectDirectiveApp(event: any): void {
    this.appExample01Interpolation = event.srcElement.value === 'appExample01Interpolation';
    this.appNgif = event.srcElement.value === 'appNgif';
    this.appNgfor = event.srcElement.value === 'appNgfor';
    this.appNgswitch = event.srcElement.value === 'appNgswitch';
    this.appAttributeDirectives = event.srcElement.value === 'appAttributeDirectives';
    this.appReview = event.srcElement.value === 'appReview';
  }
}
