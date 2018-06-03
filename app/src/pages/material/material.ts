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

  public commentList: string[];

  readonly defaultComment = [
    '※ がついた駒の闘化素材は一覧内に合算されています。',
    '闘化駒の場合は進化状態からの素材数を計算しています。',
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(navParams);
    this.baseId = navParams.get('id');
    this.dataMap = MaterialData.getDataMap();

    this.commentList = [];
    const baseObj = this.dataMap[this.baseId];
    this.listMap = {};
    this.list = [];
    this.base = Object.assign(baseObj);
    this.base.num = 1;

    this.addMaterialList(this.base.id, 1, true);

    this.addComment(this.commentList, this.defaultComment);

    this.addComment(this.commentList, this.base.comment);

    for (let i = 0; i < this.list.length; i++) {
      const listData = this.list[i];
      if (listData.how === 'バトルコイン') {
        const data = this.dataMap[listData.id];
        listData.battleCoin = data.battleCoin;
      }

      this.addComment(this.commentList, listData.comment);
      this.addComment(this.commentList, listData.commentChild);

    }
    console.log('materialList');
    console.log(this.list);
  }

  private addComment(commentList: string[], comment: string[]) {
    if (comment) {
      for (let j = 0; j < comment.length; j++) {
        commentList.push(comment[j]);
      }
    }
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
      how: data.how,
      comment: data.comment,
      commentChild: data.commentChild
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
