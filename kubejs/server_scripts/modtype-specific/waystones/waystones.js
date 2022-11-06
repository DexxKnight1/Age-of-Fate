onEvent('recipes', (event) => {	

  event.remove({output: 'waystones:warp_dust'})
  event.remove({output: 'waystones:warp_stone'})

  event.shapeless('waystones:warp_dust', ['thermal:diamond_dust', 'minecraft:ender_pearl', '#forge:dyes/purple']).id(`kubejs:waystones/warp_dust`)

  event.shaped('waystones:warp_stone', ['ABA', 'BCB', 'ABA'], {
    A: 'waystones:warp_dust',
    B: 'rftoolsbase:infused_enderpearl',
    C: 'botanicalmachinery:mana_emerald'
  }).id(`kubejs:waystones/warp_stone`)

})
