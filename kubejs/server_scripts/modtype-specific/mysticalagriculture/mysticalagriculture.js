onEvent('recipes', (event) => {
	
  let mainfusion = (output, middle, item1, item2, item3, item4, item5, item6, item7, item8) => {
    event.recipes.mysticalagriculture.infusion({
      input: { item: middle },
      ingredients: [
        { item: item1 },
        { item: item2 },
        { item: item3 },
        { item: item4 },
        { item: item5 },
        { item: item6 },
        { item: item7 },
        { item: item8 }
      ],
      result: { item: output }
    }).id(`kubejs:${output.replace(':', '/')}/infusion`)
  }

  function essenceCircle(result, count, name) {
    event.shaped(item.of(result, count), ['AAA', 'A A', 'AAA'], { A: `mysticalagriculture:${name}_essence` }).id(`kubejs:mysticalagriculture/${name}_essence_crafting`)
  }

  mainfusion('kubejs:magical_soil', 'botania:overgrowth_seed', 'mysticalagradditions:insanium_farmland', 'mysticalagradditions:insanium_block', 'mysticalagradditions:insanium_farmland', 'mysticalagradditions:insanium_block', 'mysticalagradditions:insanium_farmland', 'mysticalagradditions:insanium_block', 'mysticalagradditions:insanium_farmland', 'mysticalagradditions:insanium_block')

  essenceCircle('allthemodium:allthemodium_nugget', 1, 'allthemodium')
  essenceCircle('allthemodium:vibranium_nugget', 1, 'vibranium')
  essenceCircle('allthemodium:unobtainium_nugget', 1, 'unobtainium')
  essenceCircle('industrialforegoing:plastic', 6, 'plastic')
  essenceCircle('projectred-core:electrotine_dust', 6, 'electrotine')
  essenceCircle('forbidden_arcanus:arcane_gold_ingot', 2, 'arcane_gold')
  essenceCircle('draconicevolution:small_chaos_frag', 1, 'chaotic')
  essenceCircle('botania:elementium_ingot', 2, 'elementium')
  essenceCircle('mythicbotany:alfsteel_ingot', 1, 'alfsteel')
  essenceCircle('botania:livingwood', 8, 'livingwood')
  essenceCircle('botania:livingrock', 8, 'livingrock')
  essenceCircle('botania:manasteel_ingot', 3, 'manasteel')
  essenceCircle('botania:terrasteel_ingot', 1, 'terrasteel')
  essenceCircle('botania:life_essence', 1, 'gaia')
  essenceCircle('extendedcrafting:the_ultimate_nugget', 1, 'ultimate_ingot')
  essenceCircle('stalwart_dungeons:tungsten_ingot', 2, 'tungsten_ingot')

  function essenceLine(result, count, name) {
    event.shaped(item.of(result, count), ['   ', 'AAA', '   '], { A: `mysticalagriculture:${name}_essence` }).id(`kubejs:mysticalagriculture/${name}_essence_crafting`)
  }

  essenceLine('industrialforegoing:pink_slime', 4, 'pink_slime')
  essenceLine('minecraft:phantom_membrane', 4, 'phantom')
  essenceLine('thermal:niter', 6, 'niter')
  essenceLine('thermal:cured_rubber', 6, 'rubber')
  essenceLine('projectred-core:silicon', 8, 'silicon')

  function essenceX(result, count, name) {
    event.shaped(item.of(result, count), ['AAA', ' A ', 'AAA'], { A: `mysticalagriculture:${name}_essence` }).id(`kubejs:mysticalagriculture/${name}_essence_crafting`)
  }

  essenceX('astralsorcery:rock_crystal', 1, 'rock_crystal')

  event.remove({output: 'mysticalagriculture:silicon_seeds'})
  event.remove({id: 'mysticalagriculture:essence/astralsorcery/rock_crystal'})
  event.remove({id: 'mysticalagriculture:essence/botania/manasteel_ingot'})
  event.remove({id: 'mysticalagriculture:essence/botania/terrasteel_ingot'})
  event.remove({id: 'mysticalagriculture:essence/botania/elementium_ingot'})
  event.remove({id: 'mysticalagriculture:essence/common/tungsten_ingot'})
  event.remove({id: 'mysticalagriculture:essence/common/silicon'})
  event.remove({id: 'mysticalagriculture:essence/common/niter'})
  event.remove({id: 'mysticalagriculture:essence/common/rubber'})
 
  event.recipes.mysticalagriculture.infusion({
    input: { item: 'mysticalagriculture:prosperity_seed_base' },
    ingredients: [{ item: 'projectred-core:silicon' },
				  { item: 'mysticalagriculture:prudentium_essence' },
				  { item: 'projectred-core:silicon' },
				  { item: 'mysticalagriculture:prudentium_essence' },
				  { item: 'projectred-core:silicon' },
				  { item: 'mysticalagriculture:prudentium_essence' },
				  { item: 'projectred-core:silicon' },
				  { item: 'mysticalagriculture:prudentium_essence' }],
    result: { item: 'mysticalagriculture:silicon_seeds' }
  }).id('kubejs:mysticalagriculture/silicon_seeds')

  event.recipes.mysticalagriculture.infusion({
    input: { item: 'mysticalagriculture:prosperity_seed_base' },
    ingredients: [{ item: 'thermal:rubber' },
				  { item: 'mysticalagriculture:prudentium_essence' },
				  { item: 'thermal:rubber' },
				  { item: 'mysticalagriculture:prudentium_essence' },
				  { item: 'thermal:rubber' },
				  { item: 'mysticalagriculture:prudentium_essence' },
				  { item: 'thermal:rubber' },
				  { item: 'mysticalagriculture:prudentium_essence' }],
    result: { item: 'mysticalagriculture:rubber_seeds' }
  }).id('kubejs:mysticalagriculture/rubber_seeds')

})
