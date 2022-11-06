onEvent('recipes', (event) => {

    event.remove({id: 'iceandfire:packed_ice'})
    event.remove({id: 'iceandfire:dragonsteel_fire_sword'})
    event.remove({id: 'iceandfire:dragonsteel_fire_axe'})
    event.remove({id: 'iceandfire:dragonsteel_fire_pickaxe'})
    event.remove({id: 'iceandfire:dragonsteel_fire_shovel'})
    event.remove({id: 'iceandfire:dragonsteel_ice_sword'})
    event.remove({id: 'iceandfire:dragonsteel_ice_axe'})
    event.remove({id: 'iceandfire:dragonsteel_ice_pickaxe'})
    event.remove({id: 'iceandfire:dragonsteel_ice_shovel'})
    event.remove({id: 'iceandfire:dragonsteel_lightning_sword'})
    event.remove({id: 'iceandfire:dragonsteel_lightning_axe'})
    event.remove({id: 'iceandfire:dragonsteel_lightning_pickaxe'})
    event.remove({id: 'iceandfire:dragonsteel_lightning_shovel'})

    event.shaped('minecraft:blue_ice', ['AAA', 'AAA', 'AAA'], {
        A: 'iceandfire:dragon_ice'
    }).id(`kubejs:minecraft/blue_ice`)

    //Fire Dragonsteel Sword
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '       DH',
            '      DAD',
            '     DAD ',
            'BG  DAD  ',
            ' BGDAD   ',
            ' EBAD    ',
            ' FIBG    ',
            'FCFEBG   ',
            'CF   B   ',
        ],
        key: {
            A: {item: 'forestcraft:molten_ingot', },
            B: {item: 'allthecompressed:blaze_rod_block_1x', },
            C: {item: 'iceandfire:dragon_bone_block', },
            D: {item: 'iceandfire:dragonsteel_fire_ingot', },
            E: {item: 'botania:rune_fire', },
            F: {item: 'iceandfire:witherbone', },
            G: {item: 'minecraft:nether_star', },
            H: {item: 'bloodmagic:lavacrystal', },
            I: {item: 'iceandfire:dragonbone_sword_fire'},
        },
        result: {item: 'iceandfire:dragonsteel_fire_sword', },
    }).id(`kubejs:iceandfire/dragonsteel_fire_sword`)

    //Fire Dragonsteel Axe
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            ' DH G HD ',
            'DA  G  AD',
            'DA EFE AD',
            'DABBFBBAD',
            'DA EFE AD',
            'DA  F  AD',
            ' DH I HD ',
            '   GCG   ',
            '   GCG   ',
        ],
        key: {
            A: {item: 'forestcraft:molten_ingot', },
            B: {item: 'allthecompressed:blaze_rod_block_1x', },
            C: {item: 'iceandfire:dragon_bone_block', },
            D: {item: 'iceandfire:dragonsteel_fire_ingot', },
            E: {item: 'botania:rune_fire', },
            F: {item: 'iceandfire:witherbone', },
            G: {item: 'minecraft:nether_star', },
            H: {item: 'bloodmagic:lavacrystal', },
            I: {item: 'iceandfire:dragonbone_sword_fire'},
        },
        result: {item: 'iceandfire:dragonsteel_fire_axe', },
    }).id(`kubejs:iceandfire/dragonsteel_fire_axe`)

    //Fire Dragonsteel Pickaxe
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '  DDDDD  ',
            ' DAAAAAD ',
            'DADEBEDAD',
            'HD GBG DH',
            '   GBG   ',
            '   GBG   ',
            '   FIF   ',
            '   FCF   ',
            '   FCF   ',
        ],
        key: {
            A: {item: 'forestcraft:molten_ingot', },
            B: {item: 'allthecompressed:blaze_rod_block_1x', },
            C: {item: 'iceandfire:dragon_bone_block', },
            D: {item: 'iceandfire:dragonsteel_fire_ingot', },
            E: {item: 'botania:rune_fire', },
            F: {item: 'iceandfire:witherbone', },
            G: {item: 'minecraft:nether_star', },
            H: {item: 'bloodmagic:lavacrystal', },
            I: {item: 'iceandfire:dragonbone_sword_fire'},
        },
        result: {item: 'iceandfire:dragonsteel_fire_pickaxe', },
    }).id(`kubejs:iceandfire/dragonsteel_fire_pickaxe`)

    //Fire Dragonsteel Shovel
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '  DAHAD  ',
            '  DAGAD  ',
            '  DAGAD  ',
            '  DABAD  ',
            '   EBE   ',
            '   GBG   ',
            '   GIG   ',
            '   FCF   ',
            '   FCF   ',
        ],
        key: {
            A: {item: 'forestcraft:molten_ingot', },
            B: {item: 'allthecompressed:blaze_rod_block_1x', },
            C: {item: 'iceandfire:dragon_bone_block', },
            D: {item: 'iceandfire:dragonsteel_fire_ingot', },
            E: {item: 'botania:rune_fire', },
            F: {item: 'iceandfire:witherbone', },
            G: {item: 'minecraft:nether_star', },
            H: {item: 'bloodmagic:lavacrystal', },
            I: {item: 'iceandfire:dragonbone_sword_fire'},
        },
        result: {item: 'iceandfire:dragonsteel_fire_shovel', },
    }).id(`kubejs:iceandfire/dragonsteel_fire_shovel`)

    //Ice Dragonsteel Sword
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '       DH',
            '      DAD',
            '     DAD ',
            'BG  DAD  ',
            ' BGDAD   ',
            ' EBAD    ',
            ' FIBG    ',
            'FCFEBG   ',
            'CF   B   ',
        ],
        key: {
            A: {item: 'extendedcrafting:crystaltine_ingot', },
            B: {item: 'securitycraft:reinforced_blue_ice', },
            C: {item: 'iceandfire:dragon_bone_block', },
            D: {item: 'iceandfire:dragonsteel_ice_ingot', },
            E: {item: 'botania:rune_earth', },
            F: {item: 'iceandfire:witherbone', },
            G: {item: 'minecraft:nether_star', },
            H: {item: 'mowziesmobs:ice_crystal', },
            I: {item: 'iceandfire:dragonbone_sword_ice'},
        },
        result: {item: 'iceandfire:dragonsteel_ice_sword', },
    }).id(`kubejs:iceandfire/dragonsteel_ice_sword`)

    //Ice Dragonsteel Axe
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            ' DH G HD ',
            'DA  G  AD',
            'DA EFE AD',
            'DABBFBBAD',
            'DA EFE AD',
            'DA  F  AD',
            ' DH I HD ',
            '   GCG   ',
            '   GCG   ',
        ],
        key: {
            A: {item: 'extendedcrafting:crystaltine_ingot', },
            B: {item: 'securitycraft:reinforced_blue_ice', },
            C: {item: 'iceandfire:dragon_bone_block', },
            D: {item: 'iceandfire:dragonsteel_ice_ingot', },
            E: {item: 'botania:rune_earth', },
            F: {item: 'iceandfire:witherbone', },
            G: {item: 'minecraft:nether_star', },
            H: {item: 'mowziesmobs:ice_crystal', },
            I: {item: 'iceandfire:dragonbone_sword_ice'},
        },
        result: {item: 'iceandfire:dragonsteel_ice_axe', },
    }).id(`kubejs:iceandfire/dragonsteel_ice_axe`)

    //Ice Dragonsteel Pickxe
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '  DDDDD  ',
            ' DAAAAAD ',
            'DADEBEDAD',
            'HD GBG DH',
            '   GBG   ',
            '   GBG   ',
            '   FIF   ',
            '   FCF   ',
            '   FCF   ',
        ],
        key: {
            A: {item: 'extendedcrafting:crystaltine_ingot', },
            B: {item: 'securitycraft:reinforced_blue_ice', },
            C: {item: 'iceandfire:dragon_bone_block', },
            D: {item: 'iceandfire:dragonsteel_ice_ingot', },
            E: {item: 'botania:rune_earth', },
            F: {item: 'iceandfire:witherbone', },
            G: {item: 'minecraft:nether_star', },
            H: {item: 'mowziesmobs:ice_crystal', },
            I: {item: 'iceandfire:dragonbone_sword_ice'},
        },
        result: {item: 'iceandfire:dragonsteel_ice_pickaxe', },
    }).id(`kubejs:iceandfire/dragonsteel_ice_pickaxe`)

    //Ice Dragonsteel Shovel
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '  DAHAD  ',
            '  DAGAD  ',
            '  DAGAD  ',
            '  DABAD  ',
            '   EBE   ',
            '   GBG   ',
            '   GIG   ',
            '   FCF   ',
            '   FCF   ',
        ],
        key: {
            A: {item: 'extendedcrafting:crystaltine_ingot', },
            B: {item: 'securitycraft:reinforced_blue_ice', },
            C: {item: 'iceandfire:dragon_bone_block', },
            D: {item: 'iceandfire:dragonsteel_ice_ingot', },
            E: {item: 'botania:rune_earth', },
            F: {item: 'iceandfire:witherbone', },
            G: {item: 'minecraft:nether_star', },
            H: {item: 'mowziesmobs:ice_crystal', },
            I: {item: 'iceandfire:dragonbone_sword_ice'},
        },
        result: {item: 'iceandfire:dragonsteel_ice_shovel', },
    }).id(`kubejs:iceandfire/dragonsteel_ice_shovel`)

    //Lightning Dragonsteel Sword
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '       DH',
            '      DAD',
            '     DAD ',
            'BG  DAD  ',
            ' BGDAD   ',
            ' EBAD    ',
            ' FIBG    ',
            'FCFEBG   ',
            'CF   B   ',
        ],
        key: {
            A: {item: 'lazierae2:fluix_steel_ingot', },
            B: {item: 'iceandfire:amythest_block', },
            C: {item: 'iceandfire:dragon_bone_block', },
            D: {item: 'iceandfire:dragonsteel_lightning_ingot', },
            E: {item: 'relics:rune_of_lightning', },
            F: {item: 'iceandfire:witherbone', },
            G: {item: 'minecraft:nether_star', },
            H: {item: 'forestcraft:thunder_feather', },
            I: {item: 'iceandfire:dragonbone_sword_lightning'},
        },
        result: {item: 'iceandfire:dragonsteel_lightning_sword', },
    }).id(`kubejs:iceandfire/dragonsteel_lightning_sword`)

    //Lightning Dragonsteel Axe
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            ' DH G HD ',
            'DA  G  AD',
            'DA EFE AD',
            'DABBFBBAD',
            'DA EFE AD',
            'DA  F  AD',
            ' DH I HD ',
            '   GCG   ',
            '   GCG   ',
        ],
        key: {
            A: {item: 'lazierae2:fluix_steel_ingot', },
            B: {item: 'iceandfire:amythest_block', },
            C: {item: 'iceandfire:dragon_bone_block', },
            D: {item: 'iceandfire:dragonsteel_lightning_ingot', },
            E: {item: 'relics:rune_of_lightning', },
            F: {item: 'iceandfire:witherbone', },
            G: {item: 'minecraft:nether_star', },
            H: {item: 'forestcraft:thunder_feather', },
            I: {item: 'iceandfire:dragonbone_sword_lightning'},
        },
        result: {item: 'iceandfire:dragonsteel_lightning_axe', },
    }).id(`kubejs:iceandfire/dragonsteel_lightning_axe`)

    //Lightning Dragonsteel Pickxe
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '  DDDDD  ',
            ' DAAAAAD ',
            'DADEBEDAD',
            'HD GBG DH',
            '   GBG   ',
            '   GBG   ',
            '   FIF   ',
            '   FCF   ',
            '   FCF   ',
        ],
        key: {
            A: {item: 'lazierae2:fluix_steel_ingot', },
            B: {item: 'iceandfire:amythest_block', },
            C: {item: 'iceandfire:dragon_bone_block', },
            D: {item: 'iceandfire:dragonsteel_lightning_ingot', },
            E: {item: 'relics:rune_of_lightning', },
            F: {item: 'iceandfire:witherbone', },
            G: {item: 'minecraft:nether_star', },
            H: {item: 'forestcraft:thunder_feather', },
            I: {item: 'iceandfire:dragonbone_sword_lightning'},
        },
        result: {item: 'iceandfire:dragonsteel_lightning_pickaxe', },
    }).id(`kubejs:iceandfire/dragonsteel_lightning_pickaxe`)

    //Lightning Dragonsteel Shovel
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '  DAHAD  ',
            '  DAGAD  ',
            '  DAGAD  ',
            '  DABAD  ',
            '   EBE   ',
            '   GBG   ',
            '   GIG   ',
            '   FCF   ',
            '   FCF   ',
        ],
        key: {
            A: {item: 'lazierae2:fluix_steel_ingot', },
            B: {item: 'iceandfire:amythest_block', },
            C: {item: 'iceandfire:dragon_bone_block', },
            D: {item: 'iceandfire:dragonsteel_lightning_ingot', },
            E: {item: 'relics:rune_of_lightning', },
            F: {item: 'iceandfire:witherbone', },
            G: {item: 'minecraft:nether_star', },
            H: {item: 'forestcraft:thunder_feather', },
            I: {item: 'iceandfire:dragonbone_sword_lightning'},
        },
        result: {item: 'iceandfire:dragonsteel_lightning_shovel', },
    }).id(`kubejs:iceandfire/dragonsteel_lightning_shovel`)

})
