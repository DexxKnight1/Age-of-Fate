onEvent('recipes', (event) => {

  event.remove({ id: 'byg:ametrine_horse_armor' })
  event.remove({ id: 'byg:pendorite_horse_armor' })

  event.shaped('byg:black_ice', ['AAA', 'ABA', 'AAA'], {
    A: 'minecraft:ice',
    B: '#forge:dyes/black'
  }).id(`kubejs:byg_black_ice`)

  event.shaped('byg:ametrine_horse_armor', ['  A', 'ABA', 'ACA'], {
    A: 'byg:ametrine_gems',
    B: 'minecraft:saddle',
    C: 'druidcraft:rope'
  }).id(`kubejs:byg/ametrine_horse_armor`)

  event.shaped('byg:pendorite_horse_armor', ['  A', 'ABA', 'ACA'], {
    A: 'byg:pendorite_ingot',
    B: 'minecraft:saddle',
    C: 'druidcraft:rope'
  }).id(`kubejs:byg/pendorite_horse_armor`)

  modifyShaped(event, 'byg:chain_plating', 2, ['ABA', 'B B', 'ABA'], {
    A: '#forge:nuggets/iron',
    B: '#forge:ingots/iron'
  })

})
