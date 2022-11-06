onEvent('recipes', (event) => {

  function tinkerBasinCasting(entries) {
    entries.forEach(([input, output]) => {
      event.custom({
        type: 'tconstruct:casting_basin',
        cast: { item: input },
          cast_consumed: true,
          fluid: { name: 'tconstruct:magma', amount: 1000 },
          result: output,
          cooling_time: 90
        }).id(`kubejs:basin_casting/${output.substring(output.indexOf(':') + 1)}`)
      })
  }

  function tinkerMelting(entries) {
    entries.forEach(input => {
      event.custom({
        type: 'tconstruct:melting',
        ingredient: { item: input },
        result: { fluid: 'tconstruct:magma', amount: 1000 },
        temperature: 300,
        time: 127
        }).id(`kubejs:melting/${input.substring(input.indexOf(':') + 1)}`)
      })
  }

  function tinkerBlockMelting(entries) {
    entries.forEach(([input, fluidAmount, time, byproductAmount], index) => {
      event.custom({
        type: 'tconstruct:melting',
        ingredient: input,
        result: { fluid: 'alltheores:molten_copper', amount: fluidAmount },
        temperature: 500,
        time: time,
        byproducts: [{ fluid: 'tconstruct:seared_stone', amount: byproductAmount }]
      }).id(`kubejs:melting/copper/fromblock/${index + 1}`)
    })
  }

  tinkerBasinCasting([
    ['byg:cryptic_stone', 'byg:cryptic_magma_block'],
    ['minecraft:blackstone', 'byg:magmatic_stone']
  ])

  tinkerMelting(['byg:cryptic_magma_block', 'byg:magmatic_stone'])
    
  tinkerBlockMelting([
    [{ item: 'tconstruct:smeltery_controller' }, 576, 175, 1152],
    [[{ item: 'tconstruct:seared_drain' }, { item: 'tconstruct:seared_chute' }], 288, 125, 576]
  ])

  event.shaped('8x tconstruct:grout', ['AAA', 'BCD'], {
    A: 'mysticalagriculture:dirt_essence',
    B: 'mysticalagriculture:fire_essence',
    C: 'mysticalagriculture:water_essence',
    D: 'mysticalagriculture:stone_essence'
  }).id(`kubejs:tconstruct/grout`)

})
