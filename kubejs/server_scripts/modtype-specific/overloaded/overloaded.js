onEvent('recipes', (event) => {
	
	event.remove({output: 'overloaded:hyper_item_receiver'})
	event.remove({output: 'overloaded:hyper_item_sender'})
	event.remove({output: 'overloaded:hyper_fluid_receiver'})
	event.remove({output: 'overloaded:hyper_fluid_sender'})
	event.remove({output: 'overloaded:hyper_energy_receiver'})
	event.remove({output: 'overloaded:hyper_energy_sender'})
	event.remove({output: 'overloaded:instant_furnace'})
	event.remove({output: 'overloaded:energy_core'})
	event.remove({output: 'overloaded:item_core'})
	event.remove({output: 'overloaded:fluid_core'})
	event.remove({output: 'overloaded:multi_helmet'})
	event.remove({output: 'overloaded:multi_chestplate'})
	event.remove({output: 'overloaded:multi_leggings'})
	event.remove({output: 'overloaded:multi_boots'})
	event.remove({output: 'overloaded:multi_tool'})
	event.remove({output: 'overloaded:railgun'})
	event.remove({output: 'overloaded:nether_star_block'})
	
	event.shaped('overloaded:hyper_item_receiver', ['ABA', 'BCB', 'ABA'], {
        A: 'allthecompressed:iron_block_5x',
        B: '#forge:chests/wooden',
        C: 'allthecompressed:nether_star_block_3x'
    }).id(`kubejs:overloaded/hyperitemreceiver`)
	
	event.shaped('overloaded:hyper_item_sender', ['ABA', 'CDC', 'ABA'], {
        A: 'allthecompressed:iron_block_5x',
        B: '#forge:chests/wooden',
        C: 'minecraft:ender_eye',
		D: 'allthecompressed:nether_star_block_3x'
    }).id(`kubejs:overloaded/hyperitemsender`)
	
	event.shaped('overloaded:hyper_fluid_receiver', ['GHG', 'HJH', 'GHG'], {
        G: 'allthecompressed:iron_block_5x',
        H: 'minecraft:bucket',
        J: 'allthecompressed:nether_star_block_3x'
    }).id(`kubejs:overloaded/hyperfluidreceiver`)
	
	event.shaped('overloaded:hyper_fluid_sender', ['ABA', 'CDC', 'ABA'], {
        A: 'allthecompressed:iron_block_5x',
        B: 'minecraft:bucket',
        C: 'minecraft:ender_eye',
		D: 'allthecompressed:nether_star_block_3x'
    }).id(`kubejs:overloaded/hyperfluidsender`)
	
	event.shaped('overloaded:hyper_energy_receiver', ['ABA', 'BCB', 'ABA'], {
        A: 'allthecompressed:iron_block_5x',
        B: 'minecraft:redstone_block',
        C: 'allthecompressed:nether_star_block_3x'
    }).id(`kubejs:overloaded/hyperenergyreceiver`)
	
	event.shaped('overloaded:hyper_energy_sender', ['ABA', 'CDC', 'ABA'], {
        A: 'allthecompressed:iron_block_5x',
        B: 'minecraft:redstone_block',
        C: 'minecraft:ender_eye',
		D: 'allthecompressed:nether_star_block_3x'
    }).id(`kubejs:overloaded/hyperenergysender`)
	
	event.shaped('overloaded:instant_furnace', ['CAC', 'ABA', 'CAC'], {
        A: 'allthecompressed:nether_star_block_7x',
        B: 'avaritiafurnace:infinity_furnace',
		C: 'allthecompressed:nether_star_block_5x'
    }).id(`kubejs:overloaded/instantfurnace`)
	
	event.shaped('overloaded:energy_core', ['AAA', 'ABA', 'AAA'], {
        A: 'allthecompressed:nether_star_block_5x',
        B: 'mekanism:steel_casing'
    }).id(`kubejs:overloaded/energycore`)
	
	event.shaped('overloaded:item_core', ['AAA', 'ABA', 'AAA'], {
        A: 'allthecompressed:nether_star_block_5x',
        B: 'mekanism:personal_chest'
    }).id(`kubejs:overloaded/itemcore`)
	
	event.shaped('overloaded:fluid_core', ['AAA', 'ABA', 'AAA'], {
        A: 'allthecompressed:nether_star_block_5x',
        B: 'mekanism:fluidic_plenisher'
    }).id(`kubejs:overloaded/fluidcore`)
	
	event.shaped('overloaded:multi_helmet', [' C ', 'ABA', 'D D'], {
        A: 'allthecompressed:nether_star_block_7x',
        B: 'overloaded:energy_core',
		C: 'mekanism:pellet_antimatter',
		D: 'allthecompressed:nether_star_block_9x'
    }).id(`kubejs:overloaded/multihelmet`)
	
	event.shaped('overloaded:multi_chestplate', ['ACA', 'ABA', 'DDD'], {
        A: 'allthecompressed:nether_star_block_7x',
        B: 'overloaded:energy_core',
		C: 'mekanism:pellet_antimatter',
		D: 'allthecompressed:nether_star_block_9x'
    }).id(`kubejs:overloaded/multichestplate`)
	
	event.shaped('overloaded:multi_leggings', ['DBD', 'ACA', 'A A'], {
        A: 'allthecompressed:nether_star_block_7x',
        B: 'overloaded:energy_core',
		C: 'mekanism:pellet_antimatter',
		D: 'allthecompressed:nether_star_block_9x'
    }).id(`kubejs:overloaded/multileggings`)
	
	event.shaped('overloaded:multi_boots', [' C ', 'A A', 'DBD'], {
        A: 'allthecompressed:nether_star_block_7x',
        B: 'overloaded:energy_core',
		C: 'mekanism:pellet_antimatter',
		D: 'allthecompressed:nether_star_block_9x'
    }).id(`kubejs:overloaded/multiboots`)
	
	event.shaped('overloaded:multi_tool', ['ED ', 'DBA', ' AC'], {
        A: 'allthecompressed:nether_star_block_9x',
        B: 'overloaded:energy_core',
		C: 'allthecompressed:iron_block_7x',
		D: 'minecraft:iron_ingot',
		E: 'minecraft:nether_star'
    }).id(`kubejs:overloaded/multitool`)
	
	event.shaped('overloaded:railgun', ['   ', 'AAB', ' AA'], {
        A: 'allthecompressed:nether_star_block_7x',
        B: 'overloaded:energy_core'
    }).id(`kubejs:overloaded/rgun`)
	
})
