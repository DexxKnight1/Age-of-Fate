onEvent('jei.hide.items', (event) => {

	let typeFirst = ['mekanism', 'immersiveengineering']

	function hideMetal(mod, name, types) {
		types.forEach(type => {
		  let id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
		  if (!Ingredient.of(id).stacks.empty) event.hide(id)
		})
	}

	function hideStuff(mod, type, names) {
		names.forEach(name => {
		  let id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
		  if (!Ingredient.of(id).stacks.empty) event.hide(id)
		})
	}

	//Hide Metals
	hideMetal('immersiveengineering', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  	hideMetal('immersiveengineering', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  	hideMetal('immersiveengineering', 'aluminum', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  	hideMetal('immersiveengineering', 'uranium', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  	hideMetal('immersiveengineering', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
 	hideMetal('immersiveengineering', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  	hideMetal('immersiveengineering', 'steel', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  	hideMetal('immersiveengineering', 'electrum', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  	hideMetal('immersiveengineering', 'constantan', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  	hideMetal('mekanism', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  	hideMetal('mekanism', 'tin', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  	hideMetal('mekanism', 'uranium', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  	hideMetal('mekanism', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'block'])
 	hideMetal('mekanism', 'osmium', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  	hideMetal('mekanism', 'bronze', ['ingot', 'dust', 'nugget', 'block'])
  	hideMetal('create', 'copper', ['ingot', 'ore', 'nugget', 'block'])
  	hideMetal('create', 'zinc', ['ingot', 'ore', 'nugget', 'block'])
  	hideMetal('thermal', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  	hideMetal('thermal', 'tin', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  	hideMetal('thermal', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  	hideMetal('thermal', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  	hideMetal('thermal', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'block'])
	hideMetal('forbidden_arcanus', 'arcane_gold', ['ingot', 'nugget', 'block'])
	hideMetal('bno', 'aluminum', ['ingot', 'nugget', 'block'])
	hideMetal('bno', 'copper', ['ingot', 'nugget', 'block'])
	hideMetal('bno', 'lead', ['ingot', 'nugget', 'block'])
	hideMetal('bno', 'nickel', ['ingot', 'nugget', 'block'])
	hideMetal('bno', 'silver', ['ingot', 'nugget', 'block'])
	hideMetal('bno', 'tin', ['ingot', 'nugget', 'block'])
	hideMetal('bno', 'osmium', ['ingot', 'nugget', 'block'])
	hideMetal('bno', 'uranium', ['ingot', 'nugget', 'block'])
	hideMetal('beo', 'aluminum', ['ingot', 'nugget', 'block'])
	hideMetal('beo', 'copper', ['ingot', 'nugget', 'block'])
	hideMetal('beo', 'lead', ['ingot', 'nugget', 'block'])
	hideMetal('beo', 'nickel', ['ingot', 'nugget', 'block'])
	hideMetal('beo', 'silver', ['ingot', 'nugget', 'block'])
	hideMetal('beo', 'tin', ['ingot', 'nugget', 'block'])
	hideMetal('beo', 'osmium', ['ingot', 'nugget', 'block'])
	hideMetal('beo', 'uranium', ['ingot', 'nugget', 'block'])
	hideMetal('occultism', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'block'])
	hideMetal('occultism', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'block'])
	hideMetal('cavesandcliffs', 'copper', ['ingot', 'ore'])
	hideMetal('tconstruct', 'copper', ['ingot', 'ore', 'nugget', 'block'])
	hideMetal('platinum', 'platinum', ['ingot', 'ore', 'nugget', 'block'])
	hideMetal('werewolves', 'silver', ['ingot', 'ore', 'nugget', 'block'])
	hideMetal('boss_tools', 'steel', ['ingot','nugget', 'block'])
	hideMetal('iceandfire', 'copper', ['ingot', 'ore','nugget', 'block'])
	hideMetal('iceandfire', 'silver', ['ingot', 'ore','nugget', 'block'])
	hideMetal('eidolon', 'lead', ['ingot', 'ore','nugget', 'block'])
	hideMetal('bigreactors', 'yellorium', ['ingot', 'dust','nugget', 'block'])
	hideMetal('bigreactors', 'yellorium', ['ingot', 'dust','nugget', 'block'])
	hideMetal('magistuarmory', 'steel', ['ingot', 'plate'])

	//Hide Stuff
	hideStuff('mysticalagriculture', 'seeds', [ 'mithril', 'tungsten', 'titanium', 'chrome', 'iridium', 'yellorium'])
    hideStuff('mysticalagriculture', 'essence', [ 'mithril', 'tungsten', 'titanium', 'chrome', 'iridium', 'yellorium'])
	hideStuff('quark', 'crate', ['apple', 'potato', 'carrot', 'beetroot'])

    event.hide([
		'apotheosis:iron_mining_arrow',
    	'apotheosis:diamond_mining_arrow',
    	'apotheosis:explosive_arrow',
		'relics:mithril_ingot',
		/ftblibrary:fluid_container/,
		/supplementaries:bamboo_spikes_tipped/,
		'allthecompressed:blazing_crystal_block_1x',
		'allthecompressed:blazing_crystal_block_2x',
		'allthecompressed:blazing_crystal_block_3x',
		'allthecompressed:blazing_crystal_block_4x',
		'allthecompressed:blazing_crystal_block_5x',
		'allthecompressed:blazing_crystal_block_6x',
		'allthecompressed:blazing_crystal_block_7x',
		'allthecompressed:blazing_crystal_block_8x',
		'allthecompressed:blazing_crystal_block_9x',
		'allthecompressed:energized_steel_block_1x',
		'allthecompressed:energized_steel_block_2x',
		'allthecompressed:energized_steel_block_3x',
		'allthecompressed:energized_steel_block_4x',
		'allthecompressed:energized_steel_block_5x',
		'allthecompressed:energized_steel_block_6x',
		'allthecompressed:energized_steel_block_7x',
		'allthecompressed:energized_steel_block_8x',
		'allthecompressed:energized_steel_block_9x',
		'allthecompressed:niotic_crystal_block_1x',
		'allthecompressed:niotic_crystal_block_2x',
		'allthecompressed:niotic_crystal_block_3x',
		'allthecompressed:niotic_crystal_block_4x',
		'allthecompressed:niotic_crystal_block_5x',
		'allthecompressed:niotic_crystal_block_6x',
		'allthecompressed:niotic_crystal_block_7x',
		'allthecompressed:niotic_crystal_block_8x',
		'allthecompressed:niotic_crystal_block_9x',
		'allthecompressed:nitro_crystal_block_1x',
		'allthecompressed:nitro_crystal_block_2x',
		'allthecompressed:nitro_crystal_block_3x',
		'allthecompressed:nitro_crystal_block_4x',
		'allthecompressed:nitro_crystal_block_5x',
		'allthecompressed:nitro_crystal_block_6x',
		'allthecompressed:nitro_crystal_block_7x',
		'allthecompressed:nitro_crystal_block_8x',
		'allthecompressed:nitro_crystal_block_9x',
		'allthecompressed:spirited_crystal_block_1x',
		'allthecompressed:spirited_crystal_block_2x',
		'allthecompressed:spirited_crystal_block_3x',
		'allthecompressed:spirited_crystal_block_4x',
		'allthecompressed:spirited_crystal_block_5x',
		'allthecompressed:spirited_crystal_block_6x',
		'allthecompressed:spirited_crystal_block_7x',
		'allthecompressed:spirited_crystal_block_8x',
		'allthecompressed:spirited_crystal_block_9x',
		'allthecompressed:uraninite_block_1x',
		'allthecompressed:uraninite_block_2x',
		'allthecompressed:uraninite_block_3x',
		'allthecompressed:uraninite_block_4x',
		'allthecompressed:uraninite_block_5x',
		'allthecompressed:uraninite_block_6x',
		'allthecompressed:uraninite_block_7x',
		'allthecompressed:uraninite_block_8x',
		'allthecompressed:uraninite_block_9x',
		'kubejs:explorershat',
		'kubejs:trading_permission',
		'projectred-exploration:copper_block',
		'projectred-exploration:tin_block',
		'projectred-exploration:silver_block',
		'quark:gunpowder_sack',
		'refinedstorage:silicon',
		'appliedenergistics2:silicon',
		'projectred-core:copper_ingot',
		'projectred-core:tin_ingot',
		'projectred-core:silver_ingot',
		'allthecompressed:atm_star_block',
		'allthecompressed:atm_star_block_1x',
		'allthecompressed:atm_star_block_2x',
		'allthecompressed:atm_star_block_3x',
		'allthecompressed:atm_star_block_4x',
		'allthecompressed:atm_star_block_5x',
		'allthecompressed:atm_star_block_6x',
		'allthecompressed:atm_star_block_7x',
		'allthecompressed:atm_star_block_8x',
		'allthecompressed:atm_star_block_9x',
		'overloaded:nether_star_block',
   	 	'projectred-exploration:copper_ore',
    	'projectred-exploration:tin_ore',
    	'projectred-exploration:silver_ore',
		'overloaded:ray_gun',
		'overloaded:creative_generator',
		'forestcraft:sky_shooter',
		'forestcraft:sky_bullet',
		'quark:matrix_enchanter',
		'mekanism:block_charcoal',
		'thermal:charcoal_block',
		'charm:ender_pearl_block',
		'charm:gunpowder_block',
		'extendedcrafting:handheld_table',
		'quark:sugar_cane_block',
		'extendedcrafting:nether_star_block'
	])

})
