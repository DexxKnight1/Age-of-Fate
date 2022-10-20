onEvent('recipes', (event) => {	

  event.remove({output: 'thermal:onion_block'})
  event.remove({output: 'thermal:machine_frame'})
  event.remove({output: 'thermal:redstone_servo'})
  event.remove({output: 'thermal:rf_coil'})

  event.shapeless('thermal:onion_block', '9x #forge:crops/onion')
  event.shapeless('thermal:ender_pearl_dust', 'appliedenergistics2:ender_dust').id(`kubejs:appliedenergistics2/ender_dust`)

  event.shaped('thermal:machine_frame', ['ADA', 'BCB', 'ADA'], {
    A: '#forge:ingots/brass',
    B: 'glassential:glass_dark',
    C: 'industrialforegoing:machine_frame_pity',
    D: 'immersiveengineering:light_engineering'
  }).id(`kubejs:thermal/machine_frame`)

  event.shaped('thermal:redstone_servo', [' A ', 'BCB', ' A '], {
    A: 'projectred-core:red_ingot',
    B: 'projectred-core:electrotine_dust',
    C: 'rftoolsbase:infused_diamond'
  }).id(`kubejs:thermal/redstone_servo`)

  event.shaped('thermal:rf_coil', ['C A', ' B ', 'A C'], {
    A: 'projectred-core:red_ingot',
    B: '#forge:ingots/gold',
    C: 'projectred-core:electrotine_ingot'
  }).id(`kubejs:thermal/rf_coil`)

  const idRemovals = [
    'thermal:storage/tin_block',
    'thermal:storage/copper_block',
    'thermal:storage/lead_block',
    'thermal:storage/platinum_block',
    'thermal:storage/uranium_block',
    'thermal:storage/silver_block',
    'thermal:storage/aluminum_block',
    'thermal:storage/nickel_block',
    'thermal:storage/osmium_block',
    'thermal:storage/zinc_block',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_zombie_pigman_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_phantom_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_villager_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_wolf_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_polar_bear_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_llama_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_stray_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_vex_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_evoker_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_magma_cube_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_drowned_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_dolphin_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_husk_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_panda_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_vindicator_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_shulker_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_ravager_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_guardian_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_mooshroom_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_horse_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_silverfish_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_fox_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_endermite_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_witch_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_pillager_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_parrot_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_cat_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_bat_seeds',
    'thermal:slag/white_concrete_powder_with_slag',
    'thermal:slag/orange_concrete_powder_with_slag',
    'thermal:slag/magenta_concrete_powder_with_slag',
    'thermal:slag/light_blue_concrete_powder_with_slag',
    'thermal:slag/yellow_concrete_powder_with_slag',
    'thermal:slag/lime_concrete_powder_with_slag',
    'thermal:slag/pink_concrete_powder_with_slag',
    'thermal:slag/gray_concrete_powder_with_slag',
    'thermal:slag/light_gray_concrete_powder_with_slag',
    'thermal:slag/cyan_concrete_powder_with_slag',
    'thermal:slag/purple_concrete_powder_with_slag',
    'thermal:slag/blue_concrete_powder_with_slag',
    'thermal:slag/brown_concrete_powder_with_slag',
    'thermal:slag/green_concrete_powder_with_slag',
    'thermal:slag/red_concrete_powder_with_slag',
    'thermal:slag/black_concrete_powder_with_slag',
  ]

  idRemovals.forEach((id) => {
    event.remove({ id: id })
  })

  //event.recipes.thermal.pulverizer(
    //[
      //Item.of('astralsorcery:aquamarine').withChance(6),
      //Item.of('minecraft:sand').withChance(0.2)
    //],
    //[{ item: 'astralsorcery:aquamarine_sand_ore' }]
  //)

  event.recipes.thermal.press('9x alltheores:copper_ingot', ['alltheores:copper_block', 'thermal:press_unpacking_die']).id(`kubejs:thermal:machine/press/unpacking/press_copper_unpacking`)
  event.recipes.thermal.press('9x alltheores:silver_ingot', ['alltheores:silver_block', 'thermal:press_unpacking_die']).id(`kubejs:thermal:machine/press/unpacking/press_silver_unpacking`)
  event.recipes.thermal.press('9x alltheores:tin_ingot', ['alltheores:tin_block', 'thermal:press_unpacking_die']).id(`kubejs:thermal:machine/press/unpacking/press_tin_unpacking`)
  event.recipes.thermal.press('9x alltheores:lead_ingot', ['alltheores:lead_block', 'thermal:press_unpacking_die']).id(`kubejs:thermal:machine/press/unpacking/press_lead_unpacking`)
  event.recipes.thermal.press('9x alltheores:nickel_ingot', ['alltheores:nickel_block', 'thermal:press_unpacking_die']).id(`kubejs:thermal:machine/press/unpacking/press_nickel_unpacking`)
  event.recipes.thermal.press('9x alltheores:platinum_ingot', ['alltheores:platinum_block', 'thermal:press_unpacking_die']).id(`kubejs:thermal:machine/press/unpacking/press_platinum_unpacking`)
  event.recipes.thermal.press('9x alltheores:osmium_ingot', ['alltheores:osmium_block', 'thermal:press_unpacking_die']).id(`kubejs:thermal:machine/press/unpacking/press_osmium_unpacking`)
  event.recipes.thermal.press('9x alltheores:aluminum_ingot', ['alltheores:aluminum_block', 'thermal:press_unpacking_die']).id(`kubejs:thermal:machine/press/unpacking/press_aluminum_unpacking`)
  event.recipes.thermal.press('9x alltheores:uranium_ingot', ['alltheores:uranium_block', 'thermal:press_unpacking_die']).id(`kubejs:thermal:machine/press/unpacking/press_uranium_unpacking`)
  event.recipes.thermal.press('9x alltheores:zinc_ingot', ['alltheores:zinc_block', 'thermal:press_unpacking_die']).id(`kubejs:thermal:machine/press/unpacking/press_zinc_unpacking`)
  event.recipes.thermal.press('9x tconstruct:tinkers_bronze_ingot', ['tconstruct:tinkers_bronze_block', 'thermal:press_unpacking_die']).id(`kubejs:thermal:machine/press/unpacking/press_tinkers_bronze_unpacking`)
  event.recipes.thermal.press('9x extendedcrafting:crystaltine_ingot', ['extendedcrafting:crystaltine_block', 'thermal:press_unpacking_die']).id(`kubejs:thermal:machine/press/unpacking/press_crystaltine_unpacking`)

  event.recipes.thermal.press('minecraft:blaze_rod', '2x minecraft:blaze_powder')

})
