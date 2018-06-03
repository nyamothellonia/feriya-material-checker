import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CharaData} from '../data/CharaData';
import {MaterialData} from '../data/MaterialData';
import {MaterialType} from '../type/MaterialType';


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

  public base: CharaData;
  public listMap: { [key: string]: CharaData };
  public list: CharaData[];

  public TYPE_PARENT: string = MaterialType.TYPE_PARENT;
  public TYPE_BATTLE_COIN: string = MaterialType.TYPE_BATTLE_COIN;
  public TYPE_NOT_BATTLE_COIN: string = MaterialType.TYPE_NOT_BATTLE_COIN;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(navParams);
    this.baseId = navParams.get('id');
    this.dataMap = MaterialData.getDataMap();

    const baseObj = this.dataMap[this.baseId];
    this.listMap = {};
    this.list = [];
    this.base = {id: baseObj.id, name: baseObj.name, num: 1};

    this.addMaterialList(this.base.id, 1, true);

    for (let i = 0; i < this.list.length; i++) {
      const listData = this.list[i];
      if (listData.how === 'バトルコイン') {
        const data = this.dataMap[listData.id];
        listData.battleCoin = data.battleCoin;
      }

    }
    console.log('materialList');
    console.log(this.list);
  }

  private addMaterialList(id: string, num: number, start: boolean) {

    const data = this.dataMap[id];

    if (!start) {
      this.addListNum(id);
    }

    if (data.how) {
      const map = this.listMap[id];
      console.log('how', id, data.how, map.num, num);
      map.num += num;
    } else {
      if (!start) {
        const map = this.listMap[id];
        map.num += num;
      }
      const baseId = data.base;
      if (baseId) {
        console.log('base', baseId, num);
        this.addListNum(baseId);
        this.addMaterialList(baseId, num, false);
      }
      if (data.list) {
        console.log('list', data.list);
        for (let j: number = 0; j < data.list.length; j++) {
          const child = data.list[j];
          this.addMaterialList(child.id, child.num * num, false);
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
    if (data.list) {
      this.listMap[id].parent = true;
      this.listMap[id].type = MaterialType.TYPE_PARENT;
    } else {
      this.listMap[id].type = data.battleCoin ? MaterialType.TYPE_BATTLE_COIN : MaterialType.TYPE_NOT_BATTLE_COIN;
    }
    this.list.push(this.listMap[id]);
  }
}
