import {CharaData} from './CharaData';

export class MaterialData {
  static _dataList: CharaData[];
  static _dataMap: { [key: string]: CharaData };

  static getDataList() {
    if (MaterialData._dataList) {
      return MaterialData._dataList;
    }

    MaterialData.check();

    return MaterialData._dataList;
  }

  static getDataMap() {
    if (MaterialData._dataMap) {
      return MaterialData._dataMap;
    }
    MaterialData.check();
    return MaterialData._dataMap;
  }

  static check() {
    MaterialData._dataList = [];
    MaterialData._dataMap = {};


    console.log(MaterialData.data);
    for (const key in MaterialData.data) {
      console.log(key);

      const obj = new CharaData();
      const raw = MaterialData.data[key];
      obj.name = key;
      obj.id = raw.id;
      obj.list = raw.list;
      obj.how = raw.how;
      obj.base = raw.base;
      obj.comment = raw.comment;
      obj.commentChild = raw.commentChild;
      obj.battleCoin = raw.battleCoin;
      if (MaterialData.data[key].select) {
        MaterialData._dataList.push(obj);

      }
      MaterialData._dataMap[obj.id] = obj;
    }
    console.log(MaterialData._dataMap);
  }

  static readonly data = {
    'フェリヤ': {
      'id': 'feriya',
      'how': '白の塔'
    },
    '神フェリヤ': {
      'id': 'god-feriya',
      'select': true,
      'base': 'feriya',
      'list': [
        {
          'id': 'feriya',
          'num': 2
        },
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
      'base': 'feriya',
      'list': [
        {
          'id': 'feriya',
          'num': 2
        },
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
      'base': 'feriya',
      'list': [
        {
          'id': 'feriya',
          'num': 2
        },
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
          'id': 'guardian',
          'num': 1
        },
        {
          'id': 'fight-munia',
          'num': 2
        },
        {
          'id': 'archimedes',
          'num': 2
        },
        {
          'id': 'cardia',
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
          'id': 'fight-branjetta',
          'num': 2
        },
        {
          'id': 'shyturn',
          'num': 3
        },
        {
          'id': 'rokujo',
          'num': 3
        }
      ]
    },
    '竜の守護者': {
      'id': 'dragon-guardian',
      'select': true,
      'base': 'guardian',
      'list': [
        {
          'id': 'guardian',
          'num': 1
        },
        {
          'id': 'fight-guelius',
          'num': 2
        },
        {
          'id': 'caocao',
          'num': 3
        },
        {
          'id': 'theresia',
          'num': 3
        }
      ]
    },
    '守護者': {
      'id': 'guardian',
      'how': '白の塔'
    },
    '闘化ムーニア': {
      'id': 'fight-munia',
      'select': true,
      'base': 'munia',

      'list': [
        {
          'id': 'archimedes',
          'num': 1
        },
        {
          'id': 'god-soul',
          'num': 3
        },
        {
          'id': 'diamond-carbuncle',
          'num': 2
        },
        {
          'id': 'platinum-carbuncle',
          'num': 3
        }
      ]
    },
    '闘化ブランジェッタ': {
      'id': 'fight-branjetta',
      'select': true,
      'base': 'branjetta',
      'list': [
        {
          'id': 'moruana',
          'num': 1
        },
        {
          'id': 'evil-soul',
          'num': 3
        },
        {
          'id': 'diamond-carbuncle',
          'num': 2
        },
        {
          'id': 'platinum-carbuncle',
          'num': 3
        }
      ]
    },
    '闘化グエリアス': {
      'id': 'fight-guelius',
      'select': true,
      'base': 'guelius',
      'list': [
        {
          'id': 'theresia',
          'num': 1
        },
        {
          'id': 'dragon-soul',
          'num': 3
        },
        {
          'id': 'diamond-carbuncle',
          'num': 2
        },
        {
          'id': 'platinum-carbuncle',
          'num': 3
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
    'モルアナ': {
      'id': 'moruana',
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
    'ダイアモンドカーバンクル': {
      'id': 'diamond-carbuncle',
      'how': 'バトルコイン',
      'battleCoin': 100
    },
    'プラチナカーバンクル': {
      'id': 'platinum-carbuncle',
      'how': 'バトルコイン',
      'battleCoin': 80
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
}
