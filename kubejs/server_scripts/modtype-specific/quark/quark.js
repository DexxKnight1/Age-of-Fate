onEvent('recipes', (event) => {

  event.shaped('quark:mushroom_chest', ['AAA', 'A A', 'AAA'], {
    A: '#forge:mushroom_caps'
  }).id(`kubejs:quark/mushroom_chest`)

  const idRemovals = [
    'quark:building/crafting/compressed/apple_crate',
    'quark:building/crafting/compressed/apple_crate_uncompress',
    'quark:building/crafting/compressed/potato_crate',
    'quark:building/crafting/compressed/potato_crate_uncompress',
    'quark:building/crafting/compressed/carrot_crate',
    'quark:building/crafting/compressed/carrot_crate_uncompress',
    'quark:building/crafting/compressed/beetroot_crate',
    'quark:building/crafting/compressed/beetroot_crate_uncompress',
    'quark:building/crafting/compressed/gunpowder_sack',
    'quark:building/crafting/compressed/gunpowder_sack_uncompress',
    'quark:building/crafting/compressed/sugar_cane_block',
    'quark:building/crafting/compressed/sugar_cane_block_uncompress',
    'quark:building/crafting/chests/mushroom_chest',
    'quark:tweaks/crafting/elytra_duplication',
    'quark:tweaks/crafting/utility/bent/bread',
    'quark:tweaks/crafting/utility/bent/cookie',
    'quark:tweaks/crafting/utility/bent/paper'
    
  ]

  idRemovals.forEach((id) => {
    event.remove({ id: id })
  })

})
