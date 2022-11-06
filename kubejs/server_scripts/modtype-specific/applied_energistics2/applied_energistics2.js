onEvent('recipes', (event) => {

  event.shaped('appliedenergistics2:controller', ['ABA', 'CDC', 'ABA'], {
    A: 'appliedenergistics2:smooth_sky_stone_block',
    B: 'appliedenergistics2:purified_fluix_crystal',
    C: 'industrialforegoing:plastic',
    D: 'appliedenergistics2:engineering_processor'
  }).id(`kubejs:appliedenergistics2/controller`)
  
  event.shaped('4x appliedenergistics2:sky_stone_block', ['BSB', 'SBS', 'BSB'], {
    S: 'minecraft:stone',
    B: 'minecraft:blackstone'
  }).id(`kubejs:appliedenergistics2/sky_stone_brick`)

  event.shaped('appliedenergistics2:calculation_processor_press', ['CFC', 'FVF', 'PFP'], {
    C: 'appliedenergistics2:purified_certus_quartz_crystal',
    F: '#forge:ingots/fluix_steel',
    V: '#forge:storage_blocks/iron',
    P: 'appliedenergistics2:fluix_pearl'
  }).id(`kubejs:appliedenergistics2/calculation_press`)

  event.shaped('appliedenergistics2:logic_processor_press', ['BFB', 'FVF', 'CFC'], {
    B: 'naturesaura:tainted_gold',
    F: '#forge:ingots/fluix_steel',
    V: '#forge:storage_blocks/iron',
    C: '#forge:ingots/rose_gold'
  }).id(`kubejs:appliedenergistics2/logic_press`)

  event.shaped('appliedenergistics2:engineering_processor_press', ['DFD', 'FVF', 'DFD'], {
    D: '#forge:gems/mana_diamond',
    F: '#forge:ingots/fluix_steel',
    V: '#forge:storage_blocks/iron'
  }).id(`kubejs:appliedenergistics2/engineering_press`)

  event.shaped('appliedenergistics2:silicon_press', ['WFW', 'FVF', 'WFW'], {
    W: 'projectred-core:silicon',
    F: '#forge:ingots/fluix_steel',
    V: '#forge:storage_blocks/iron'
  }).id(`kubejs:appliedenergistics2/silicon_press`)
  
  event.remove({output: 'appliedenergistics2:controller'})
  event.remove({output: 'appliedenergistics2:cable_anchor'})
  //event.remove({id: 'appliedenergistics2:facade/stalwart_dungeons/awful_ghast_altar'})
  //event.remove({id: 'appliedenergistics2:facade/stalwart_dungeons/nether_keeper_altar'})
  //event.remove({id: 'appliedenergistics2:facade/stalwart_dungeons/shelterer_altar'})

  event.shapeless('appliedenergistics2:ender_dust', 'thermal:ender_pearl_dust').id(`kubejs:thermal/ender_pearl_dust`)

  event.recipes.appliedenergistics2.grinder({
    input: { tag: 'forge:flour_plants' },
    result: { primary: { item: 'pamhc2foodcore:flouritem', count: 1 } },
    turns: 8
  }).id(`kubejs:appliedenergistics2/grinder/flour`)
  
  event.remove({ output: 'appliedenergistics2:printed_silicon'})
  event.remove({ output: 'appliedenergistics2:silicon'})

  event.recipes.appliedenergistics2.inscriber({
    mode: 'inscribe',
    result: { item: 'appliedenergistics2:printed_silicon' },
    ingredients: {
      top: { item: 'appliedenergistics2:silicon_press' },
      middle: { item: 'projectred-core:silicon' }
    }
  }).id(`kubejs:appliedenergistics2/inscriber/printed_silicon`)
  
  event.replaceInput({item: 'appliedenergistics2:silicon'}, 'projectred-core:silicon')

  modifyShaped(event, 'appliedenergistics2:quartz_glass', 4, ['GDG', 'DGD', 'GDG'], {
    G: '#appliedenergistics2:dusts/quartz',
    D: '#forge:glass'
  })

  modifyShaped(event, 'appliedenergistics2:quartz_fiber', 3, ['DDD', 'GGG', 'DDD'], {
    G: '#appliedenergistics2:dusts/quartz',
    D: '#forge:glass'
  })

  modifyShaped(event, 'appliedenergistics2:chest', 1, ['GTG', 'C C', 'IFI'], {
    G: '#forge:glass',
    T: 'appliedenergistics2:terminal',
    C: 'appliedenergistics2:fluix_glass_cable',
    I: '#forge:ingots/iron',
    F: '#appliedenergistics2:crystals/fluix'
  })

  modifyShaped(event, 'appliedenergistics2:condenser', 1, ['IGI', 'GDG', 'IGI'], {
    G: '#forge:glass',
    I: '#forge:ingots/iron',
    D: '#appliedenergistics2:dusts/fluix',
  })

  modifyShaped(event, 'appliedenergistics2:spatial_io_port', 1, ['GGG', 'CPC', 'IEI'], {
    G: '#forge:glass',
    C: 'appliedenergistics2:fluix_glass_cable',
    P: 'appliedenergistics2:io_port',
    I: '#forge:ingots/iron',
    E: 'appliedenergistics2:engineering_processor'
  })

  modifyShaped(event, 'appliedenergistics2:io_port', 1, ['GGG', 'DCD', 'IPI'], {
    G: '#forge:glass',
    C: 'appliedenergistics2:fluix_glass_cable',
    P: 'appliedenergistics2:logic_processor',
    I: '#forge:ingots/iron',
    D: 'appliedenergistics2:drive'
  })

  modifyShaped(event, 'appliedenergistics2:interface', 1, ['IGI', 'A F', 'IGI'], {
    G: '#forge:glass',
    A: 'appliedenergistics2:annihilation_core',
    F: 'appliedenergistics2:formation_core',
    I: '#forge:ingots/iron'
  })

  modifyShaped(event, 'appliedenergistics2:molecular_assembler', 1, ['IGI', 'ACF', 'IGI'], {
    G: 'appliedenergistics2:quartz_glass',
    A: 'appliedenergistics2:annihilation_core',
    F: 'appliedenergistics2:formation_core',
    I: '#forge:ingots/iron',
    C: '#forge:workbench'
  })
  
  modifyShaped(event, 'appliedenergistics2:cell_workbench', 1, ['WEW', 'ICI', 'III'], {
    W: '#minecraft:wool',
    E: 'appliedenergistics2:calculation_processor',
    I: '#forge:ingots/iron',
    C: '#forge:chests/wooden'
  })

  modifyShapeless(event, 'appliedenergistics2:cable_anchor', 3, ['#forge:ingots/iron', '#appliedenergistics2:knife'])
  modifyShapeless(event, 'appliedenergistics2:fluix_covered_cable', 1, ['#minecraft:wool', 'appliedenergistics2:fluix_glass_cable'])
  modifyShapeless(event, 'appliedenergistics2:crafting_card', 1, ['#forge:workbench', 'appliedenergistics2:basic_card'])
  modifyShapeless(event, 'appliedenergistics2:fuzzy_card', 1, ['#minecraft:wool', 'appliedenergistics2:advanced_card'])
  modifyShapeless(event, 'appliedenergistics2:crafting_terminal', 1, ['appliedenergistics2:terminal', '#forge:workbench', 'appliedenergistics2:calculation_processor'])

})
