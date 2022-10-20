onEvent('recipes', (event) => {
	
	event.shapeless('biomesoplenty:flesh', '9x minecraft:rotten_flesh').id(`kubejs:biomesoplenty:flesh`)
    event.shapeless('9x minecraft:rotten_flesh', 'biomesoplenty:flesh').id(`kubejs:minecraft:rotten_flesh`)
	
})
