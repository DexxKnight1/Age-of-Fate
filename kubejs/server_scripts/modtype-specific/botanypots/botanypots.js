events.listen('recipes', function (event) {


  function hopperRecipe(color) {

      event.remove({id: /botanypots:crafting\/hopper.*_botany_pot/ })
      event.remove({id: /botanypots:crafting\/compact_hopper.*botany_pot/ })
      event.remove({id: 'botanypotstiers:elite_hopper_botany_pot'})
      event.remove({id: 'botanypotstiers:ultra_hopper_botany_pot'})
      event.remove({id: 'botanypotstiers:creative_hopper_botany_pot'})
      event.remove({id: `botanypotstiers:elite_hopper_${color}_botany_pot`})
      event.remove({id: `botanypotstiers:ultra_hopper_${color}_botany_pot`})
      event.remove({id: `botanypotstiers:creative_hopper_${color}_botany_pot`})

      let variant = color ? `${color}_botany_pot` : 'botany_pot';

      event.shaped(`botanypots:hopper_${variant}`, ["ABA", "CFC", "DED"], {
        A: 'thermal:enderium_ingot',
        B: 'forbidden_arcanus:dark_nether_star',
        C: 'create:electron_tube',
        D: 'industrialforegoing:pink_slime_ingot',
        E: 'naturesaura:grated_chute',
        F: `botanypots:${variant}`
      }).id(`kubejs:botany_pots/regular/hopper_${variant}`)

      event.shaped(`botanypotstiers:elite_hopper_${variant}`, ["ABA", "CFC", "DED"], {
        A: 'allthecompressed:enderium_block_3x',
        B: 'forbidden_arcanus:dark_nether_star',
        C: 'create:electron_tube',
        D: 'industrialforegoing:pink_slime_ingot',
        E: 'naturesaura:grated_chute',
        F: `botanypotstiers:elite_${variant}`
      }).id(`kubejs:botanypotstiers/elite/${variant}`)

      event.shaped(`botanypotstiers:ultra_hopper_${variant}`, ["ABA", "CFC", "DED"], {
        A: 'allthecompressed:enderium_block_5x',
        B: 'forbidden_arcanus:dark_nether_star',
        C: 'create:electron_tube',
        D: 'industrialforegoing:pink_slime_ingot',
        E: 'naturesaura:grated_chute',
        F: `botanypotstiers:ultra_${variant}`
      }).id(`kubejs:botanypotstiers/ultra/${variant}`)

      event.shaped(`botanypotstiers:creative_hopper_${variant}`, ["ABA", "CFC", "DED"], {
        A: 'allthecompressed:enderium_block_7x',
        B: 'forbidden_arcanus:dark_nether_star',
        C: 'create:electron_tube',
        D: 'industrialforegoing:pink_slime_ingot',
        E: 'naturesaura:grated_chute',
        F: `botanypotstiers:creative_${variant}`
      }).id(`kubejs:botanypotstiers/creative/${variant}`)

      if (color) {
        event.shapeless(`botanypots:${variant}`, ['#misctags:botany_pots', `#forge:dyes/${color}`]).id(`kubejs:botany_pots/dye/${variant}`)
        event.shapeless(`botanypots:hopper_${variant}`, ['#botanypots:hopper_botany_pots', `#forge:dyes/${color}`]).id(`kubejs:botany_pots/dye/hopper_${variant}`)
      }
  }

  hopperRecipe()
  colors.forEach(color => hopperRecipe(color))

  //Soils
  function makeFarmland(input, name, categories, growthModifier) {
    event.recipes.botanypots.soil({
      input: { item: input },
      display: {
        block: input,
        properties: { moisture: 7 }
      },
      categories: categories,
      growthModifier: growthModifier
    }).id(`kubejs:botany_pots/soil/${name}`)
  }
  function makeSoil(input, name, categories, growthModifier) {
    event.recipes.botanypots.soil({
      input: { item: input },
      display: { block: input },
      categories: categories,
      growthModifier: growthModifier
    }).id(`kubejs:botany_pots/soil/${name}`)
  }
  //Crops
  function tier(types, time, soil) {
    types.forEach(type => {
      let rItem = `mysticalagriculture:${type}_essence`
      let inItem = `mysticalagriculture:${type}_seeds`
      let renBlock = `mysticalagriculture:${type}_crop`

      event.remove({ id: `mysticalagriculture:crops/${type}` })
      event.recipes.botanypots.crop({
        seed: Ingredient.of(inItem).toJson(),
        categories: [soil],
        growthTicks: time,
        display: {
          block: renBlock,
          properties: { age: 7 }
        },
        results: [{
          chance: 0.75,
          output: Item.of(rItem).toResultJson(),
          minRolls: 1,
          maxRolls: 3
        },
        {
          chance: 0.001,
          output: Item.of(inItem).toResultJson(),
          minRolls: 1,
          maxRolls: 1
        },
        {
          chance: 0.03,
          output: Item.of('mysticalagriculture:fertilized_essence').toResultJson(),
          minRolls: 1,
          maxRolls: 1
        }]
      }).id(`kubejs:botany_pots/crop/mystical_agriculture/${type}`)
    })
  }

  makeFarmland('mysticalagradditions:insanium_farmland', 'insanium_farmland', ['dirt', 'farmland', 'inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium'], 0.50)
  makeSoil('kubejs:magical_soil', 'magical_soil', ['dirt', 'farmland', 'inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium', 'magical'], 0.75)

  //Tier 1 Crops
  tier([
    'inferium',
    'air',
    'earth',
    'fire',
    'water',
    'dirt',
    'wood',
    'ice',
    'stone'
  ], 1000, 'inferium')
  //Tier 2 Crops
  tier([
    'aluminum',
    'chicken',
    'coal',
    'copper',
    'coral',
    'cow',
    'dye',
    'electrotine',
    'fish',
    'honey',
    'mystical_flower',
    'nature',
    'nether',
    'niter',
    'pig',
    'plastic',
    'rubber',
    'saltpeter',
    'sheep',
    'slime',
    'squid',
    'turtle',
    'apatite',
    'marble',
    'limestone',
    'livingwood',
    'livingrock',
    'basalt',
    'silicon',
    'sulfur'
  ], 1750, 'prudentium')
  //Tier 3 Crops
  tier([
    'aquamarine',
    'basalz',
    'blitz',
    'blizz',
    'bronze',
    'brass',
    'certus_quartz',
    'creeper',
    'ender_biotite',
    'glowstone',
    'graphite',
    'iron',
    'ironwood',
    'lead',
    'manasteel',
    'nether_quartz',
    'obsidian',
    'phantom',
    'pig_iron',
    'prismarine',
    'quartz_enriched_iron',
    'rabbit',
    'redstone',
    'silver',
    'skeleton',
    'sky_stone',
    'slimesteel',
    'spider',
    'steeleaf',
    'tin',
    'tinkers_bronze',
    'zinc',
    'zombie'
  ], 2500, 'tertium')
  //Tier 4 Crops
  tier([
    'blaze',
    'cobalt',
    'constantan',
    'electrum',
    'elementium',
    'end',
    'enderman',
    'experience',
    'fiery_ingot',
    'fluorite',
    'fluix',
    'ghast',
    'gold',
    'hop_graphite',
    'invar',
    'knightmetal',
    'lapis_lazuli',
    'lumium',
    'nickel',
    'osmium',
    'pink_slime',
    'refined_glowstone',
    'refined_obsidian',
    'rose_gold',
    'ruby',
    'sapphire',
    'signalum',
    'steel',
    'starmetal',
    'tungsten_ingot',
    'uranium'
  ], 3250, 'imperium')
  //Tier 5 Crops
  tier([
    'arcane_gold',
    'cyanite',
    'diamond',
    'draconium',
    'enderium',
    'emerald',
    'hepatizon',
    'manyullyn',
    'netherite',
    'wither_skeleton',
    'platinum',
    'queens_slime',
    'rock_crystal',
    'terrasteel'
  ], 4000, 'supremium')
  //Tier 6 Crops
  tier([
    'awakened_draconium',
    'dragon_egg',
    'nether_star'
  ], 4750, 'insanium')
  //Magical Crops
  tier([
    'allthemodium',
    'vibranium',
    'unobtainium',
    'chaotic',
    'alfsteel',
    'gaia',
    'ultimate_ingot'
  ], 5500, 'magical')

  event.recipes.botanypots.crop([
    Item.of('ars_nouveau:mana_bloom').chance(0.75),
    { item: Item.of('ars_nouveau:mana_bloom_crop').chance(0.05), maxRolls: 2 }
  ], 'ars_nouveau:mana_bloom_crop').categories(['dirt'])

  utils.listOf(['transformation', 'sorting', 'mining', 'time']).forEach(tree => {
    event.recipes.botanypots.crop({
      seed: Item.of(`twilightforest:${tree}_sapling`).toJson(),
      categories: ['dirt'],
      growthTicks: 2400,
      display: { block: `twilightforest:${tree}_sapling` },
      results: [{
        chance: 0.25,
        output: Item.of(`twilightforest:${tree}_log`).toResultJson(),
        minRolls: 1,
        maxRolls: 1
      }]
    }).id(`kubejs:botany_pots/botanytrees/${tree}_tree`)
  })
})
