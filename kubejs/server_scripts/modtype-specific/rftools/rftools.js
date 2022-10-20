onEvent('recipes', (event) => {
	
  event.remove({id: 'rftoolsbuilder:builder'})
  event.remove({id: 'rftoolsutility:clock_module'})
  event.remove({id: 'rftoolsbase:machine_frame'})
  event.remove({id: 'rftoolscontrol:processor'})
  event.remove({id: 'rftoolscontrol:programmer'})
  
  event.shaped('rftoolsbuilder:builder', ['AEA', 'RMR', 'ARA'], {
    A: 'astralsorcery:starmetal_ingot',
    E: '#forge:ender_pearls',
    R: 'projectred-core:red_ingot',
    M: 'rftoolsbase:machine_frame'
  }).id(`kubejs:rftools/builder`)
 
  event.shaped('rftoolsutility:clock_module', [' A ', 'BCB', ' D '], {
	  A: 'minecraft:clock',
    B: 'projectred-core:red_ingot',
	  C: 'minecraft:iron_block',
	  D: 'minecraft:black_dye'
  }).id(`kubejs:rftoolsutility/clockmodule`)

  event.shaped('rftoolsbase:machine_frame', ['ABA', 'C C', 'ABA'], {
    A: 'minecraft:iron_ingot',
    B: 'ars_nouveau:magic_clay',
    C: 'industrialforegoing:plastic'
  }).id(`kubejs:rftoolsutility/clock_module`)

  event.shaped('rftoolscontrol:processor', ['ABA', 'CDC', 'ABA'], {
	  A: 'minecraft:redstone_block',
    B: 'create:polished_rose_quartz',
	  C: 'rftoolscontrol:cpu_core_2000',
	  D: 'rftoolsbase:machine_frame'
  }).id(`kubejs:rftoolscontrol/processor`)

  event.shaped('rftoolscontrol:programmer', ['ABA', 'CDC', 'ABA'], {
	  A: 'minecraft:redstone_block',
    B: 'create:polished_rose_quartz',
	  C: 'rftoolscontrol:ram_chip',
	  D: 'rftoolsbase:machine_frame'
  }).id(`kubejs:rftoolscontrol/programmer`)

})
