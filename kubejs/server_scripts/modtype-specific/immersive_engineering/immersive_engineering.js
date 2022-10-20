onEvent('recipes', (event) => {

  event.remove({output: 'immersiveengineering:cloche'})
  event.remove({output: 'immersiveengineering:rs_engineering'})
  event.remove({output: 'immersiveengineering:light_engineering'})
  event.remove({output: 'immersiveengineering:heavy_engineering'})

  event.shaped('immersiveengineering:cloche', ['GEG', 'GFG', 'TRT'], {
    G: 'glassential:glass_redstone',
    E: 'immersiveengineering:toolupgrade_revolver_electro',
    T: '#forge:treated_wood',
    R: 'immersiveengineering:rs_engineering',
	  F: 'thermal:machine_frame'
  }).id(`kubejs:immersiveengieering/cloche`)

  event.shaped('2x immersiveengineering:rs_engineering', ['ABA', 'DCD', 'ABA'], {
    A: 'immersiveengineering:sheetmetal_iron',
    B: 'immersiveengineering:wirecoil_redstone',
    C: 'create:brass_block',
    D: 'create:redstone_contact'
  }).id(`kubejs:immersiveengieering/rs_engineering`)

  event.shaped('2x immersiveengineering:light_engineering', ['ABA', 'DCD', 'ABA'], {
    A: 'botania:manasteel_block',
    B: 'astralsorcery:starmetal_ingot',
    C: 'create:brass_block',
    D: 'immersiveengineering:component_iron'
  }).id(`kubejs:immersiveengieering/light_engineering`)

  event.shaped('2x immersiveengineering:heavy_engineering', ['ABA', 'DCD', 'ABA'], {
    A: 'botania:elementium_block',
    B: 'astralsorcery:starmetal',
    C: 'create:brass_block',
    D: 'immersiveengineering:component_steel'
  }).id(`kubejs:immersiveengieering/heavy_engineering`)

})
