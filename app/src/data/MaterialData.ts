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
      obj.hierarchy = raw.hierarchy;

      if (MaterialData.data[key].select) {
        MaterialData._dataList.push(obj);

      }
      MaterialData._dataMap[obj.id] = obj;
    }
    console.log(MaterialData._dataMap);
  }

  static readonly data = {
    'フェリヤ': {
      'hierarchy' : 2,
      'id': 'feriya',
      'how': '白の塔'
    },
    '神フェリヤ': {
      'hierarchy' : 1,
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
      'hierarchy' : 1,
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
      'hierarchy' : 1,
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
      'hierarchy' : 3,
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
          'num': 3
        },
        {
          'id': 'cardia',
          'num': 3
        }
      ]
    },
    '魔の守護者': {
      'hierarchy' : 3,
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
      'hierarchy' : 3,
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
      'hierarchy' : 4,
      'id': 'guardian',
      'how': '白の塔'
    },
    '闘化ムーニア': {
      'hierarchy' : 5,
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
      'hierarchy' : 5,
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
      'hierarchy' : 5,
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
      'hierarchy' : 7,
      'id': 'archimedes',
      'how': '最凶決戦'
    },
    'カルディア': {
      'hierarchy' : 7,
      'id': 'cardia',
      'how': '絶望決戦'
    },
    '六条御息所': {
      'hierarchy' : 7,
      'id': 'rokujo',
      'how': '最凶決戦'
    },
    'シャイターン': {
      'hierarchy' : 7,
      'id': 'shyturn',
      'how': '絶望決戦'
    },
    '曹操': {
      'hierarchy' : 7,
      'id': 'caocao',
      'how': '絶望決戦'
    },
    'モルアナ': {
      'hierarchy' : 7,
      'id': 'moruana',
      'how': '最凶決戦'
    },
    'テレジア': {
      'hierarchy' : 7,
      'id': 'theresia',
      'how': '最凶決戦'
    },
    'ゴッドソウル': {
      'hierarchy' : 8,
      'id': 'god-soul',
      'how': 'バトルコイン',
      'battleCoin': 20
    },
    'エビルソウル': {
      'hierarchy' : 8,
      'id': 'evil-soul',
      'how': 'バトルコイン',
      'battleCoin': 20
    },
    'ドラゴソウル': {
      'hierarchy' : 8,
      'id': 'dragon-soul',
      'how': 'バトルコイン',
      'battleCoin': 20
    },
    'ダイアモンドカーバンクル': {
      'hierarchy' : 9,
      'id': 'diamond-carbuncle',
      'how': 'バトルコイン / クラスマッチ報酬',
      'battleCoin': 100
    },
    'プラチナカーバンクル': {
      'hierarchy' : 9,
      'id': 'platinum-carbuncle',
      'how': 'バトルコイン / クラスマッチ報酬',
      'battleCoin': 80
    },
    'ムーニア': {
      'hierarchy' : 6,
      'id': 'munia',
      'how': 'バトルコイン',
      'battleCoin': 100
    },
    'ブランジェッタ': {
      'hierarchy' : 6,
      'id': 'branjetta',
      'how': 'バトルコイン',
      'battleCoin': 100
    },
    'グエリアス': {
      'hierarchy' : 6,
      'id': 'guelius',
      'how': 'バトルコイン',
      'battleCoin': 100
    }
  };
}
