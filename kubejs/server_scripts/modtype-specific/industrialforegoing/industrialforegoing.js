onEvent('recipes', event => {

  event.remove({output: 'industrialforegoing:machine_frame_pity'})

  event.shaped('industrialforegoing:machine_frame_pity', ['ABA', 'BCB', 'ABA'], {
    A: 'botania:livingwood',
    B: 'astralsorcery:starmetal_ingot',
    C: 'immersiveengineering:rs_engineering'
  }).id(`kubejs:industrialforegoing/machine_frame_pity`)

})
