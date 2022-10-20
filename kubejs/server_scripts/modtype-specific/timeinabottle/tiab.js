onEvent('recipes', (event) => {

  event.remove({ output: 'tiab:timeinabottle'});

  event.shaped(Item.of('tiab:timeinabottle', 1), ['JJJ', 'IVI', 'SWS'], {
    J: 'tconstruct:rose_gold_block',
    I: 'minecraft:diamond_block',
    V: 'rftoolsutility:clock_module',
    S: 'minecraft:lapis_block',
	  W: 'naturesaura:bottle_two_the_rebottling'
  }).id(`kubejs:tiab/timeinabottle`)

})
