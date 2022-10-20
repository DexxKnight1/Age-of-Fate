onEvent('recipes', (event) => {

  event.remove({ id: 'create_stuff_additions:zinc_handle_recipe' })

  event.shaped('create_stuff_additions:zinc_handle', [' A ', ' A '], {
    A: 'alltheores:zinc_ingot'
  }).id(`kubejs:create_stuff_additions/zinc_handle`)

  event.recipes.create.crushing([
    '2x minecraft:netherite_scrap',
    Item.of('minecraft:netherite_scrap', 2).withChance(0.33)
  ], 'minecraft:ancient_debris')

  event.recipes.create.milling('2x minecraft:netherite_scrap', 'minecraft:ancient_debris')

  event.recipes.createSplashing([
    '10x alltheores:platinum_nugget',
    Item.of('alltheores:platinum_nugget', 5).withChance(0.5)
  ], 'create:crushed_platinum_ore')

})
