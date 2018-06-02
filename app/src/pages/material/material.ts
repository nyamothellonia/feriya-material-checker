import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CharaData} from '../home/data/CharaData';
import {MaterialData} from '../home/data/MaterialData';


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
    this.dataMap = MaterialData.DATA_MAP;

    const baseObj = this.dataMap[this.baseId];
    this.listMap = {};
    this.list = [];
    this.base = {id: baseObj.id, name: baseObj.name, num: 1};

    this.addMaterialList(this.base.id);

    console.log('materialList');
    console.log(this.list);
  }

  private addMaterialList(id: string) {
    const baseObj = this.dataMap[id];
    console.log('addMaterialList:' + id);
    console.log(baseObj.list);
    if (!baseObj.list) {
      return;
    }

    for (let i = 0; i < baseObj.list.length; i++) {
      const child = baseObj.list[i];

      console.log(child.id);
      const childName = this.dataMap[child.id].name;

      const childDataMap = this.dataMap[child.id];
      console.log(childName);

      this.addListNum(child.id);

      if (childDataMap.how) {
        console.log(childName, childDataMap.how);
        const map = this.listMap[child.id];
        map.num += child.num;
      } else {
        console.log('deep', childDataMap.list);
        console.log(childDataMap);
        const childBaseId = childDataMap.base;
        if (childBaseId) {
          this.addListNum(childBaseId);
          console.log(childDataMap.base);
          const map = this.listMap[childDataMap.base];
          map.num += child.num;
        }
        if (childDataMap.list) {
          for (let j: number = 0; j < child.num; j++) {
            this.addMaterialList(child.id);
          }
        }
      }
    }
  }

  private addListNum(id: string) {

    if (this.listMap[id]) {
      return;
    }

    const data = this.dataMap[id];
    this.listMap[id] = {
      id: id,
      name: data.name,
      num: 0,
      how: data.how
    };
    this.list.push(this.listMap[id]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialPage');
  }

}
