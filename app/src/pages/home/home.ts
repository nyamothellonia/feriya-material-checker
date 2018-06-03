import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CharaData} from '../data/CharaData';
import {MaterialData} from '../data/MaterialData';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.dataList = MaterialData.getDataList();
    this.dataMap = MaterialData.getDataMap();
  }

  public dataList: CharaData[];
  public dataMap: { [key: string]: CharaData; };

  ionViewDidEnter() {
  }

  public onClick(item: CharaData) {
    const params = {
      'id': item.id
    };
    this.navCtrl.push(
      'page-material',
      params
    );
  }
}
