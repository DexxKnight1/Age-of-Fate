onEvent('recipes', (event) => {

  event.shaped('xreliquary:fertile_lily_pad', ['ABA', 'DCD', 'AEA'], {
    A: 'xreliquary:fertile_essence',
    B: 'bloodmagic:reagentgrowth',
    C: 'minecraft:lily_pad',
    D: 'mysticalagriculture:mystical_fertilizer',
    E: 'druidcraft:growth_lamp'
  }).id(`kubejs:xreliquary/fertile_lily_pad`)

  removeRecipeByOutput(event, [
    'xreliquary:fertile_lily_pad'
  ])
  
})
