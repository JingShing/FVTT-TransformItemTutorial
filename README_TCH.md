English | [繁體中文](README_TCH.md)

# FoundryVTT 物品轉換腳本

## 範例

![example](img/example.gif)
![exmple2](img/example2.gif)

## 可選安裝插件

* [Scriptable Items]([Scriptable Items for dnd5e | Foundry Virtual Tabletop (foundryvtt.com)](https://foundryvtt.com/packages/scriptable-items))

## 基礎腳本

> 如果你不想安裝額外的插件

### 新增物品到角色

```js
// 取得叫做 test 的角色
let test =game.actors.getName("test");
// 取得 id 為 XD3kQ0JxvPDamH2m 的物品
let testitem=game.items.get("XD3kQ0JxvPDamH2m");
// 新增此物品到角色
test.createEmbeddedDocuments("Item", [testitem.toObject()])
```

### 將特定物品從角色移除

```js
// 請自行寫取得特定物品的方法，在此省略
let item;
// 直接使用 delete() 方法來從角色身上刪除道具
item.delete();
```

### 從合集包取得物品
```js
// id 格式: Compendium.dnd5e_classpack.itempack.Item.A8FA9E9D797EC9FB
// 去除 Compendium 前綴
// dnd5e_classpack.itempack 是合集包id
// A8FA9E9D797EC9FB 是物品 id

// 首先透過合集包id取得合集包
let testPack = game.packs.get("dnd5e_classpack.itempack");
// 然後透過物品id取得物品
let testItem = testPack.getDocument("A8FA9E9D797EC9FB");
```

## 使用插件
### 怎麼設定？

* 創建物品
* 點物品上方的 "scriptable item" 按鈕
  * ![script_item](img/script_item.png)
* 開啟編輯頁面
  * ![edit](img/edit.png)
* 新增觸發方式
  * ![button](img/button.png)
* 新增腳本
  * ![add_script](img/add_script.png)

### 腳本

```js
// 取得角色
let test = actor;
// 取得你想轉換成的物品id的物品
let testitem=game.items.get("B1QGodNijs2Ro5Ie");
// 新增物品到角色
test.createEmbeddedDocuments("Item", [testitem.toObject()])
// 刪除聊天室的按鈕訊息
optional.message.delete();
// 移除原本的物品
item.delete();
```

