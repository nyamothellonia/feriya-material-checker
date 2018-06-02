import {Component} from '@angular/core';
import {CharaData} from './data/CharaData';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private dataList: CharaData[];

  private data = {
    '神フェリヤ': {
      'id' : 'god-feriya',
      'select': true,
      'list': [
        {
          'id': '神の守護者',
          'num': 2
        },
        {
          'id': '魔の守護者',
          'num': 1
        },
        {
          'id': '竜の守護者',
          'num': 1
        }
      ]
    },
    '魔フェリヤ': {
      'id' : 'evil-feriya',
      'select': true,
      'list': [
        {
          'id': '神の守護者',
          'num': 1
        },
        {
          'id': '魔の守護者',
          'num': 2
        },
        {
          'id': '竜の守護者',
          'num': 1
        }
      ]
    },
    '竜フェリヤ': {
      'id' : 'dragon-feriya',
      'select': true,
      'list': [
        {
          'id': '神の守護者',
          'num': 1
        },
        {
          'id': '魔の守護者',
          'num': 1
        },
        {
          'id': '竜の守護者',
          'num': 2
        }
      ]
    },
    '神の守護者': {
      'id' : 'god-guardian',
      'select': true,
      'list': [
        {
          'id': 'アルキメデス',
          'num': 2
        },
        {
          'id': 'カルディア',
          'num': 2
        },
        {
          'id': '闘化ムーニア',
          'num': 2
        }
      ]
    },
    '魔の守護者': {
      'id' : 'evil-guardian',
      'select': true,
      'base': '心核の守護者',
      'list': [
        {
          'id': '心核の守護者',
          'num': 1
        },
        {
          'id': 'アルキメデス',
          'num': 2
        },
        {
          'id': 'カルディア',
          'num': 2
        },
        {
          'id': '闘化グエリアス',
          'num': 2
        }
      ]
    },
    '竜の守護者': {
      'id' : 'dragon-guardian',
      'select': true,
      'list': [
        {
          'id': '曹操',
          'num': 2
        },
        {
          'id': 'テレジア',
          'num': 2
        },
        {
          'id': '闘化グエリアス',
          'num': 2
        }
      ]
    },
    '闘化ムーニア': {
      'id' : 'fight-munia',
      'select': true,
      'comment': '進化ムーニアから闘化した場合の素材数です。',
      'list': [
        {
          'id': 'ダイアカーバンクル',
          'num': 2
        },
        {
          'id': 'ダイアカーバンクル',
          'num': 2
        }
      ]
    },
    '闘化ブランジェッタ': {
      'id' : 'fight-branjetta',
      'select': true,
      'comment': '進化ブランジェッタから當化シた場合の素材数です。',
      'list': [
        {
          'id': 'ダイアカーバンクル',
          'num': 2
        },
        {
          'id': 'プラチナカーバンクル',
          'num': 2
        },
        {
          'id': '魔の闘素材',
          'num': 2
        }
      ]
    },
    '闘化グエリアス': {
      'id' : 'fight-guelius',
      'select': true,
      'comment': '進化グエリアスから闘化した場合の素材数です。',
      'base': 'グエリアス',
      'list': [
        {
          'id': 'ダイアカーバンクル',
          'num': 2
        },
        {
          'id': 'ダイアカーバンクル',
          'num': 2
        }
      ]
    },
    'アルキメデス': {
      'id' : 'archimedes',
      'how': '絶望決戦'
    },
    'カルディア': {
      'id' : 'cardia',
      'how': '絶望決戦'
    },
    '六条御息所': {
      'id' : 'rokujo',
      'how': '絶望決戦'
    },
    'シャイターン': {
      'id' : 'shyturn',
      'how': '絶望決戦'
    },
    '曹操': {
      'id' : 'caocao',
      'how': '絶望決戦'
    },
    'テレジア': {
      'id' : 'theresia',
      'how': '絶望決戦'
    },
    'ゴッドソウル': {
      'id' : 'god-soul',
      'how': 'バトルコイン',
      'battle-coin': 20
    },
    'エビルソウル': {
      'id' : 'evil-soul',
      'how': 'バトルコイン',
      'battle-coin': 20
    },
    'ドラゴソウル': {
      'id' : 'dragon-soul',
      'how': 'バトルコイン',
      'battle-coin': 20
    },
    'プラチナカーバンクル': {
      'id' : 'platinum-carbuncle',
      'how': 'バトルコイン',
      'battle-coin': 100
    },
    'ムーニア': {
      'id' : 'munia',
      'how': 'バトルコイン',
      'battle-coin': 100
    },
    'ブランジェッタ': {
      'id' : 'branjetta',
      'how': 'バトルコイン',
      'battle-coin': 100
    },
    'グエリアス': {
      'id' : 'guelius',
      'how': 'バトルコイン',
      'battle-coin': 100
    }
  };

  ionViewDidEnter() {
  }

  constructor() {
    this.dataList = [];
    console.log(this.data);
    for (const key in this.data) {
      console.log(key);
      if (this.data[key].select) {
        const obj = new CharaData();
        const raw = this.data[key];
        obj.name = key;
        obj.id = raw.id;
        obj.list = raw.list;
        this.dataList.push(obj);
      }
    }
  }
}
