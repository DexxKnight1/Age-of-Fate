onEvent('recipes', (event) => {
	
	event.remove({type: 'minecraft:smelting', input: 'minecraft:gold_ingot'})
    event.remove({type: 'minecraft:blasting', input: 'minecraft:gold_ingot'})
	event.remove({type: 'minecraft:smelting', input: 'minecraft:iron_ingot'})
    event.remove({type: 'minecraft:blasting', input: 'minecraft:iron_ingot'})

    const idRemovals = [
        'minecraft:orange_bed_from_white_bed',
        'minecraft:magenta_bed_from_white_bed',
        'minecraft:light_blue_bed_from_white_bed',
        'minecraft:yellow_bed_from_white_bed',
        'minecraft:lime_bed_from_white_bed',
        'minecraft:pink_bed_from_white_bed',
        'minecraft:gray_bed_from_white_bed',
        'minecraft:light_gray_bed_from_white_bed',
        'minecraft:cyan_bed_from_white_bed',
        'minecraft:purple_bed_from_white_bed',
        'minecraft:blue_bed_from_white_bed',
        'minecraft:brown_bed_from_white_bed',
        'minecraft:green_bed_from_white_bed',
        'minecraft:red_bed_from_white_bed',
        'minecraft:black_bed_from_white_bed',
        'minecraft:white_concrete_powder',
        'minecraft:orange_concrete_powder',
        'minecraft:magenta_concrete_powder',
        'minecraft:light_blue_concrete_powder',
        'minecraft:yellow_concrete_powder',
        'minecraft:lime_concrete_powder',
        'minecraft:pink_concrete_powder',
        'minecraft:gray_concrete_powder',
        'minecraft:light_gray_concrete_powder',
        'minecraft:cyan_concrete_powder',
        'minecraft:purple_concrete_powder',
        'minecraft:blue_concrete_powder',
        'minecraft:brown_concrete_powder',
        'minecraft:green_concrete_powder',
        'minecraft:red_concrete_powder',
        'minecraft:black_concrete_powder',
        'minecraft:white_stained_glass',
        'minecraft:orange_stained_glass',
        'minecraft:magenta_stained_glass',
        'minecraft:light_blue_stained_glass',
        'minecraft:yellow_stained_glass',
        'minecraft:lime_stained_glass',
        'minecraft:pink_stained_glass',
        'minecraft:gray_stained_glass',
        'minecraft:light_gray_stained_glass',
        'minecraft:cyan_stained_glass',
        'minecraft:purple_stained_glass',
        'minecraft:blue_stained_glass',
        'minecraft:brown_stained_glass',
        'minecraft:green_stained_glass',
        'minecraft:red_stained_glass',
        'minecraft:black_stained_glass',
        'minecraft:white_stained_glass_pane_from_glass_pane',
        'minecraft:orange_stained_glass_pane_from_glass_pane',
        'minecraft:magenta_stained_glass_pane_from_glass_pane',
        'minecraft:light_blue_stained_glass_pane_from_glass_pane',
        'minecraft:yellow_stained_glass_pane_from_glass_pane',
        'minecraft:lime_stained_glass_pane_from_glass_pane',
        'minecraft:pink_stained_glass_pane_from_glass_pane',
        'minecraft:gray_stained_glass_pane_from_glass_pane',
        'minecraft:light_gray_stained_glass_pane_from_glass_pane',
        'minecraft:cyan_stained_glass_pane_from_glass_pane',
        'minecraft:purple_stained_glass_pane_from_glass_pane',
        'minecraft:blue_stained_glass_pane_from_glass_pane',
        'minecraft:brown_stained_glass_pane_from_glass_pane',
        'minecraft:green_stained_glass_pane_from_glass_pane',
        'minecraft:red_stained_glass_pane_from_glass_pane',
        'minecraft:black_stained_glass_pane_from_glass_pane',
        'minecraft:white_terracotta',
        'minecraft:orange_terracotta',
        'minecraft:magenta_terracotta',
        'minecraft:light_blue_terracotta',
        'minecraft:yellow_terracotta',
        'minecraft:lime_terracotta',
        'minecraft:pink_terracotta',
        'minecraft:gray_terracotta',
        'minecraft:light_gray_terracotta',
        'minecraft:cyan_terracotta',
        'minecraft:purple_terracotta',
        'minecraft:blue_terracotta',
        'minecraft:brown_terracotta',
        'minecraft:green_terracotta',
        'minecraft:red_terracotta',
        'minecraft:black_terracotta',
        'minecraft:white_wool',
        'minecraft:orange_wool',
        'minecraft:magenta_wool',
        'minecraft:light_blue_wool',
        'minecraft:yellow_wool',
        'minecraft:lime_wool',
        'minecraft:pink_wool',
        'minecraft:gray_wool',
        'minecraft:light_gray_wool',
        'minecraft:cyan_wool',
        'minecraft:purple_wool',
        'minecraft:blue_wool',
        'minecraft:brown_wool',
        'minecraft:green_wool',
        'minecraft:red_wool',
        'minecraft:black_wool',
        'minecraft:comparator',
        'minecraft:crafting_table',
        'minecraft:furnace',
        'minecraft:book',
        'minecraft:fire_charge',
        'minecraft:pumpkin_pie',
        'minecraft:rabbit_stew_from_brown_mushroom',
        'minecraft:rabbit_stew_from_red_mushroom'
    ]

    idRemovals.forEach((id) => {
        event.remove({ id: id })
    })

})
