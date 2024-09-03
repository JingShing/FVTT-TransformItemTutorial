let test =game.actors.getName("actor_name");
testitem=game.items.get("item_id");
test.createEmbeddedDocuments("Item", [testitem.toObject()])