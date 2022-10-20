onEvent('recipes', (event) => {
	
	event.remove({ output: 'indestructibletools:indestructible_ingot' })
    event.remove({ output: 'indestructibletools:indestructible_shovel' })
    event.remove({ output: 'indestructibletools:indestructible_pickaxe' })
    event.remove({ output: 'indestructibletools:indestructible_axe' })
    event.remove({ output: 'indestructibletools:indestructible_hoe' })
    event.remove({ output: 'indestructibletools:indestructible_sword' })
	
    event.smithing('indestructibletools:indestructible_sword', 'platinum:platinum_sword', 'indestructibletools:indestructible_ingot').id(`kubejs:indestructibletools/indestructible_sword`)
    event.smithing('indestructibletools:indestructible_shovel', 'platinum:platinum_shovel', 'indestructibletools:indestructible_ingot').id(`kubejs:indestructibletools/indestructible_shovel`)
    event.smithing('indestructibletools:indestructible_pickaxe', 'platinum:platinum_pickaxe', 'indestructibletools:indestructible_ingot').id(`kubejs:indestructibletools/indestructible_pickaxe`)
    event.smithing('indestructibletools:indestructible_axe', 'platinum:platinum_axe', 'indestructibletools:indestructible_ingot').id(`kubejs:indestructibletools/indestructible_axe`)
    event.smithing('indestructibletools:indestructible_hoe', 'platinum:platinum_hoe', 'indestructibletools:indestructible_ingot').id(`kubejs:indestructibletools/indestructible_hoe`)

    //Indestructible Ingot
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '         ',
            '         ',
            ' KKKKKKK ',
            ' KABCDEK ',
            ' KFGHIJK ',
            ' KKKKKKK ',
            '         ',
            '         ',
            '         ',
        ],
        key: {
            A: {item: 'enigmaticlegacy:etherium_ingot', },
            B: {item: 'minecraft:netherite_ingot', },
            C: {item: 'botania:terrasteel_ingot', },
            D: {item: 'thermal:enderium_ingot', },
            E: {item: 'mysticalagradditions:insanium_ingot', },
            F: {item: 'vampirism:blood_infused_enhanced_iron_ingot', },
            G: {item: 'endrem:end_crystal_ingot', },
            H: {item: 'the_afterlight:moonsteel_ingot', },
            I: {item: 'mekanism:ingot_steel', },
            J: {item: 'tconstruct:cobalt_ingot', },
            K: {item: 'minecraft:nether_star', },
        },
        result: {item: 'indestructibletools:indestructible_ingot', },
    }).id(`kubejs:indestructibletools/indestructible_ingot`)

})
