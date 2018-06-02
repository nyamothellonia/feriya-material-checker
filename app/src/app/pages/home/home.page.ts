import {Component} from '@angular/core';
import {CharaData} from './data/CharaData';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private dataList: CharaData[];
  private dataMap: { [key: string]: CharaData; };

  private data = {
    '神フェリヤ': {
      'id': 'god-feriya',
      'select': true,
      'base' : 'feriya',
      'list': [
        {
          'id': 'god-guardian',
          'num': 2
        },
        {
          'id': 'evil-guardian',
          'num': 1
        },
        {
          'id': 'dragon-guardian',
          'num': 1
        }
      ]
    },
    '魔フェリヤ': {
      'id': 'evil-feriya',
      'select': true,
      'base' : 'feriya',
      'list': [
        {
          'id': 'god-guardian',
          'num': 1
        },
        {
          'id': 'evil-guardian',
          'num': 2
        },
        {
          'id': 'dragon-guardian',
          'num': 1
        }
      ]
    },
    '竜フェリヤ': {
      'id': 'dragon-feriya',
      'select': true,
      'base' : 'feriya',
      'list': [
        {
          'id': 'god-guardian',
          'num': 1
        },
        {
          'id': 'evil-guardian',
          'num': 1
        },
        {
          'id': 'dragon-guardian',
          'num': 2
        }
      ]
    },
    '神の守護者': {
      'id': 'god-guardian',
      'select': true,
      'base': 'guardian',
      'list': [
        {
          'id': 'archimedes',
          'num': 2
        },
        {
          'id': 'cardia',
          'num': 2
        },
        {
          'id': 'fight-munia',
          'num': 2
        }
      ]
    },
    '魔の守護者': {
      'id': 'evil-guardian',
      'select': true,
      'base': 'guardian',
      'list': [
        {
          'id': 'guardian',
          'num': 1
        },
        {
          'id': 'archimedes',
          'num': 3
        },
        {
          'id': 'ca',
          'num': 3
        },
        {
          'id': 'fight-branjetta',
          'num': 2
        }
      ]
    },
    '竜の守護者': {
      'id': 'dragon-guardian',
      'select': true,
      'base': 'guardian',
      'list': [
        {
          'id': 'caocao',
          'num': 3
        },
        {
          'id': 'theresia',
          'num': 3
        },
        {
          'id': 'fight-guelius',
          'num': 2
        }
      ]
    },
    '闘化ムーニア': {
      'id': 'fight-munia',
      'select': false,
      'comment': '進化ムーニアから闘化した場合の素材数です。',
      'list': [
        {
          'id': 'diamond-carbuncle',
          'num': 2
        },
        {
          'id': 'platinum-carbuncle',
          'num': 3
        },
        {
          'id': 'god-soul',
          'num': 3
        },
        {
          'id': 'archimedes',
          'num': 1
        }
      ]
    },
    '闘化ブランジェッタ': {
      'id': 'fight-branjetta',
      'select': false,
      'base': 'branjetta',
      'comment': '進化ブランジェッタから闘化した場合の素材数です。',
      'list': [
        {
          'id': 'diamond-carbuncle',
          'num': 2
        },
        {
          'id': 'platinum-carbuncle',
          'num': 3
        },
        {
          'id': 'evil-soul',
          'num': 3
        },
        {
          'id': 'moruana',
          'num': 1
        }
      ]
    },
    '闘化グエリアス': {
      'id': 'fight-guelius',
      'select': false,
      'comment': '進化グエリアスから闘化した場合の素材数です。',
      'base': 'guelius',
      'list': [
        {
          'id': 'diamond-carbuncle',
          'num': 2
        },
        {
          'id': 'platinum-carbuncle',
          'num': 3
        },
        {
          'id': 'dragon-soul',
          'num': 3
        },
        {
          'id': 'theresia',
          'num': 1
        }
      ]
    },
    'アルキメデス': {
      'id': 'archimedes',
      'how': '絶望決戦'
    },
    'カルディア': {
      'id': 'cardia',
      'how': '絶望決戦'
    },
    '六条御息所': {
      'id': 'rokujo',
      'how': '絶望決戦'
    },
    'シャイターン': {
      'id': 'shyturn',
      'how': '絶望決戦'
    },
    '曹操': {
      'id': 'caocao',
      'how': '絶望決戦'
    },
    'テレジア': {
      'id': 'theresia',
      'how': '絶望決戦'
    },
    'ゴッドソウル': {
      'id': 'god-soul',
      'how': 'バトルコイン',
      'battleCoin': 20
    },
    'エビルソウル': {
      'id': 'evil-soul',
      'how': 'バトルコイン',
      'battleCoin': 20
    },
    'ドラゴソウル': {
      'id': 'dragon-soul',
      'how': 'バトルコイン',
      'battleCoin': 20
    },
    'プラチナカーバンクル': {
      'id': 'platinum-carbuncle',
      'how': 'バトルコイン',
      'battleCoin': 100
    },
    'ムーニア': {
      'id': 'munia',
      'how': 'バトルコイン',
      'battleCoin': 100
    },
    'ブランジェッタ': {
      'id': 'branjetta',
      'how': 'バトルコイン',
      'battleCoin': 100
    },
    'グエリアス': {
      'id': 'guelius',
      'how': 'バトルコイン',
      'battleCoin': 100
    }
  };

  ionViewDidEnter() {
  }

  constructor() {
    this.dataList = [];
    this.dataMap = {};

    console.log(this.data);
    for (const key in this.data) {
      console.log(key);
      if (this.data[key].select) {
        const obj = new CharaData();
        const raw = this.data[key];
        obj.name = key;
        obj.id = raw.id;
        obj.list = raw.list;
        obj.how = raw.how;
        obj.base = raw.base;
        obj.battleCoin = raw.battleCoin;
        this.dataList.push(obj);

        this.dataMap[obj.id] = obj;
      }
    }
  }
}
