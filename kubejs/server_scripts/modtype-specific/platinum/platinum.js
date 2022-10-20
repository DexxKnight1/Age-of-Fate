onEvent('recipes', (event) => {
   
    event.remove({id: 'platinum:platinum_sword_smithing' })
    event.remove({id: 'platinum:platinum_shovel_smithing' })
    event.remove({id: 'platinum:platinum_pickaxe_smithing' })
    event.remove({id: 'platinum:platinum_axe_smithing' })
    event.remove({id: 'platinum:platinum_hoe_smithing' })
    event.remove({id: 'platinum:platinum_helmet_smithing' })
    event.remove({id: 'platinum:platinum_chestplate_smithing' })
    event.remove({id: 'platinum:platinum_leggings_smithing' })
    event.remove({id: 'platinum:platinum_boots_smithing' })

    event.smithing('platinum:platinum_sword', 'minecraft:netherite_sword', 'alltheores:platinum_ingot').id(`kubejs:platinum/platinum_sword`)
    event.smithing('platinum:platinum_shovel', 'minecraft:netherite_shovel', 'alltheores:platinum_ingot').id(`kubejs:platinum/platinum_shovel`)
    event.smithing('platinum:platinum_pickaxe', 'minecraft:netherite_pickaxe', 'alltheores:platinum_ingot').id(`kubejs:platinum/platinum_pickaxe`)
    event.smithing('platinum:platinum_axe', 'minecraft:netherite_axe', 'alltheores:platinum_ingot').id(`kubejs:platinum/platinum_axe`)
    event.smithing('platinum:platinum_hoe', 'minecraft:netherite_hoe', 'alltheores:platinum_ingot').id(`kubejs:platinum/platinum_hoe`)
    event.smithing('platinum:platinum_helmet', 'minecraft:netherite_helmet', 'alltheores:platinum_ingot').id(`kubejs:platinum/platinum_helmet`)
    event.smithing('platinum:platinum_chestplate', 'minecraft:netherite_chestplate', 'alltheores:platinum_ingot').id(`kubejs:platinum/platinum_chestplate`)
    event.smithing('platinum:platinum_leggings', 'minecraft:netherite_leggings', 'alltheores:platinum_ingot').id(`kubejs:platinum/platinum_leggings`)
    event.smithing('platinum:platinum_boots', 'minecraft:netherite_boots', 'alltheores:platinum_ingot').id(`kubejs:platinum/platinum_boots`)

})
