English | [繁體中文](README_TCH.md)

# FoundryVTT Item Transform Macro Tutorial

## Example

![example](img/example.gif)

## Module-Optional

* [Scriptable Items]([Scriptable Items for dnd5e | Foundry Virtual Tabletop (foundryvtt.com)](https://foundryvtt.com/packages/scriptable-items))

## Base Script

> If you don't want to use module to do it

### add item to actor

```js
// get a actor called test
let test =game.actors.getName("test");
// get item id called XD3kQ0JxvPDamH2m
let testitem=game.items.get("XD3kQ0JxvPDamH2m");
// add item to actor
test.createEmbeddedDocuments("Item", [testitem.toObject()])
```

### delete item from actor

```js
// get item in actor
let item;
// using delete function to removed item from actor
item.delete();
```

## With module
### How to setup

* Create item
* Click "scriptable item" button on top
  * ![script_item](img/script_item.png)
* It will open a edit page
  * ![edit](img/edit.png)
* add triggers with button
  * ![button](img/button.png)
* add script
  * ![add_script](img/add_script.png)

### Script

```js
// get actor
let test = actor;
// item you wanna transform
let testitem=game.items.get("B1QGodNijs2Ro5Ie");
// add item to actor
test.createEmbeddedDocuments("Item", [testitem.toObject()])
// delete chat room button message generated from this script
optional.message.delete();
// remove original item
item.delete();
```

