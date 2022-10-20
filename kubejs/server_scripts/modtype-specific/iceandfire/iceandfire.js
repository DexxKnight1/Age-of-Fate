onEvent('recipes', (event) => {

    event.remove({id: 'iceandfire:packed_ice'})
    event.remove({id: 'iceandfire:dragonsteel_fire_sword'})
    event.remove({id: 'iceandfire:dragonsteel_ice_sword'})

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
            A: {item: 'the_afterlight:moonsteel_ingot', },
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

})
