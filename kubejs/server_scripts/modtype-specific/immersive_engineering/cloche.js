onEvent('recipes', (event) => {

	function tier(types, time, soil, rCount) {
	  types.forEach(type => {
		event.recipes.immersiveengineering.cloche(Item.of(`mysticalagriculture:${type}_essence`, rCount), `mysticalagriculture:${type}_seeds`, soil, `mysticalagriculture:${type}_crop`).time(time).id(`kubejs:immersiveengineering/cloche/${type}`)
	  })
	}
	function inf(rCount, time, soil) {
	  tier(['inferium'], time, soil, rCount)
	}
	function regular(results, seed, crop) {
	  event.recipes.immersiveengineering.cloche(results, Item.of(seed), 'minecraft:dirt', crop).time(600)
	}
  
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
	], 1000, '#misctags:farmland/tier1', 2)
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
	], 1750, '#misctags:farmland/tier2', 2)
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
	], 2500, '#misctags:farmland/tier3', 2)
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
	], 3250, '#misctags:farmland/tier4', 2)
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
	], 4000, '#misctags:farmland/tier5', 2)
	//Tier 6 Crops
	tier([
	  'awakened_draconium',
	  'dragon_egg',
	  'nether_star'
	], 4750, '#misctags:farmland/tier6', 2)
	//Magical Tier
	tier([
	  'allthemodium',
	  'vibranium',
	  'unobtainium',
	  'chaotic',
	  'alfsteel',
	  'gaia',
	  'ultimate_ingot'
	], 5500, 'kubejs:magical_soil', 2)
  
	//Regular crops
	regular(['forbidden_arcanus:arcane_gold_nugget', 'forbidden_arcanus:golden_orchid_seeds'], 'forbidden_arcanus:golden_orchid_seeds', 'forbidden_arcanus:golden_orchid')
	regular([Item.of('byg:blueberries', 2)], 'byg:blueberries', 'byg:blueberry_bush')

})
