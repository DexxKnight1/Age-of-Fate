// priority: 0
events.listen("jei.hide.items", function (event) {
    event.hide(/appliedenergistics2:facade/);
});

events.listen("jei.add.items", function (event) {
    event.add(Item.of("appliedenergistics2:facade", { item: "minecraft:stone" }));
});

events.listen("client.item_tooltip", function (event) {
    if (event.item.equals(Item.of("appliedenergistics2:facade", { item: "minecraft:stone" }))) {
        event.add(
            text.yellow(
                "Facades are not disabled, just hidden in JEI. To craft facades, place the block of your choice in the centre of the crafting grid (3x3) and 4x AE2 cable anchors on all adjacent sides of that block."
            )
        );
    }
});
