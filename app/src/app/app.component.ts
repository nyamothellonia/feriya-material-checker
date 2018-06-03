import {Component, ViewChild} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {CharaData} from '../pages/data/CharaData';
import {MaterialData} from '../pages/data/MaterialData';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;


  public dataList: CharaData[];
  public dataMap: { [key: string]: CharaData; };

  @ViewChild('mycontent') mycontent: NavController;

  ionViewDidEnter() {
  }

  public onClick(item: CharaData) {
    const params = {
      'id': item.id
    };
    this.mycontent.setRoot(
      'page-material',
      params
    );
  }

  public toHome() {
    this.mycontent.setRoot(
      HomePage
    );
  }

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.dataList = MaterialData.getDataList();
    this.dataMap = MaterialData.getDataMap();


  }
}

