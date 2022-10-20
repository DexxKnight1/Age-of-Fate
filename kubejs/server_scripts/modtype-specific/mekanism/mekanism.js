onEvent('recipes', event => {

  event.remove({output: 'mekanism:digital_miner'})
  event.remove({output: 'mekanism:atomic_disassembler'})
  event.remove({output: 'mekanism:robit'})
  event.remove({output: 'mekanism:steel_casing'})
  event.remove({output: 'mekanism:personal_chest'})

  event.shaped('mekanism:steel_casing', ['ABA', 'CDC', 'ABA'], {
    A: 'botania:manasteel_ingot',
    B: 'thermal:signalum_ingot',
    C: 'immersiveengineering:component_steel',
    D: 'industrialforegoing:machine_frame_advanced'
  }).id(`kubejs:mekanism/steel_casing`)
	
  event.shaped('mekanism:digital_miner', ['AUA', 'LRL', 'TST'], {
    L: 'mekanism:logistical_sorter',
    R: 'mekanism:robit',
    T: 'mekanism:teleportation_core',
    A: '#mekanism:alloys/atomic',
    S: 'mekanism:steel_casing',
    U: 'astralsorcery:starmetal'
  }).id(`kubejs:mekanism/digital_miner`)
  
  event.shaped('mekanism:atomic_disassembler', ['RER', 'RUR', ' V '], {
    E: 'mekanism:energy_tablet',
    R: '#mekanism:alloys/reinforced',
    U: '#forge:circuits/ultimate',
    V: '#forge:ingots/terrasteel'
  }).id(`kubejs:mekanism/atomic_disassembler`)
  
  event.shaped('mekanism:robit', [' S ', 'ERE', 'OPO'], {
    R: 'mekanism:alloy_atomic',
    S: '#forge:ingots/manasteel',
    E: 'mekanism:energy_tablet',
    O: 'mekanism:ingot_refined_obsidian',
    P: 'mekanism:personal_chest'
  }).id(`kubejs:mekanism/robit`)

  event.shaped('mekanism:personal_chest', ['ABA', 'CDC', 'EEE'], {
    A: '#forge:ingots/steel',
    B: 'thermal:obsidian_glass',
    C: '#forge:chests/wooden',
    D: 'mekanism:elite_control_circuit',
    E: 'thermal:enderium_ingot'
  }).id(`kubejs:mekanism/personal_chest`)

})
