onEvent('recipes', (event) => {

  function multicrush(output, input) {
    event.recipes.mekanism.crushing(output, input)
    event.recipes.create.crushing(output, input)
    event.recipes.immersiveengineering.crusher(output, input)
    event.recipes.thermal.pulverizer(output, input)
  }

  multicrush('4x minecraft:brick', 'minecraft:bricks')
  multicrush('4x minecraft:magma_cream', 'minecraft:magma_block')
  multicrush('minecraft:snow_block', 'minecraft:ice')
  multicrush('allthemodium:unobtainium_allthemodium_alloy_dust', 'allthemodium:unobtainium_allthemodium_alloy_ingot')
  multicrush('allthemodium:unobtainium_vibranium_alloy_dust', 'allthemodium:unobtainium_vibranium_alloy_ingot')
  multicrush('allthemodium:vibranium_allthemodium_alloy_dust', 'allthemodium:vibranium_allthemodium_alloy_ingot')

  event.shapeless('quark:marble', 'projectred-exploration:marble').id('kubejs:marble/projectred_to_quark')
  event.shapeless('quark:marble', 'astralsorcery:marble_raw').id('kubejs:marble/astral_to_quark')
  event.shapeless('quark:marble', 'chisel:marble/raw').id('kubejs:marble/chisel_to_quark')
  event.shapeless('projectred-exploration:marble', 'chisel:marble/raw').id('kubejs:marble/chisel_to_projectred')
  event.shapeless('projectred-exploration:marble', 'quark:marble').id('kubejs:marble/quark_to_projectred')
  event.shapeless('projectred-exploration:marble', 'astralsorcery:marble_raw').id('kubejs:marble/astral_to_projectred')
  event.shapeless('chisel:marble/raw', 'astralsorcery:marble_raw').id('kubejs:marble/astral_to_chisel')
  event.shapeless('chisel:marble/raw', 'projectred-exploration:marble').id('kubejs:marble/projectred_tochisel')
  event.shapeless('chisel:marble/raw', 'quark:marble').id('kubejs:marble/quark_to_chisel')
  event.shapeless('astralsorcery:marble_raw', 'projectred-exploration:marble').id('kubejs:marble/projectred_to_astral')
  event.shapeless('astralsorcery:marble_raw', 'quark:marble').id('kubejs:marble/quark_to_astral')
  event.shapeless('astralsorcery:marble_raw', 'chisel:marble/raw').id('kubejs:marble/chisel_to_astral')

  event.shapeless('create:limestone', 'create:weathered_limestone').id('kubejs:limestone/create_to_create')
  event.shapeless('create:weathered_limestone', 'quark:limestone').id('kubejs:limestone/create_to_quark')
  event.shapeless('quark:limestone', 'chisel:limestone/raw').id('kubejs:limestone/quark_to_chisel')
  event.shapeless('chisel:limestone/raw', 'create:limestone').id('kubejs:limestone/chisel_to_create')

})
