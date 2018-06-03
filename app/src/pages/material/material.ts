import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CharaData} from '../data/CharaData';
import {MaterialData} from '../data/MaterialData';


/**
 * Generated class for the MaterialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name: 'page-material',
    segment: 'material/:id'
  }
)
@Component({
  selector: 'page-material',
  templateUrl: 'material.html',
})
export class MaterialPage {

  public baseId: string;
  public dataMap: { [key: string]: CharaData; };

  public base: { id: string, name: string, num: number, how?: string };
  public listMap: { [key: string]: { id: string, name: string, num: number, how?: string } };
  public list: { id: string, name: string, num: number, how?: string }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(navParams);
    this.baseId = navParams.get('id');
    this.dataMap = MaterialData.getDataMap();

    const baseObj = this.dataMap[this.baseId];
    this.listMap = {};
    this.list = [];
    this.base = {id: baseObj.id, name: baseObj.name, num: 1};

    this.addMaterialList(this.base.id, 1);

    console.log('materialList');
    console.log(this.list);
  }

  private addMaterialList(id: string, num: number) {

    var data = this.dataMap[id];

    this.addListNum(id);

    if (data.how) {
      var map = this.listMap[id];
      console.log('how', id, data.how, map.num, num);
      map.num += num;
    } else {
      var baseId = data.base;
      if (baseId) {
        console.log('base', baseId, num);
        this.addListNum(baseId);
        this.addMaterialList(baseId, num);
      }
      if (data.list) {
        console.log('list', data.list);
        for (let j: number = 0; j < data.list.length; j++) {
          const child = data.list[j];
          this.addMaterialList(child.id, child.num * num);
        }
      }
    }
  }

  private addListNum(id: string) {

    if (id === 'fight-guelius') {
      console.log('stops');
    }

    if (this.listMap[id]) {
      return;
    }

    const data = this.dataMap[id];
    console.log(id);
    console.log(data);
    this.listMap[id] = {
      id: id,
      name: data.name,
      num: 0,
      how: data.how
    };
    this.list.push(this.listMap[id]);
  }
}
