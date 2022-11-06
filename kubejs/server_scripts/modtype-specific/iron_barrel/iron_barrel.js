onEvent('recipes', (event) => {
	
	event.remove({ type: 'minecraft:smithing', input: 'iron_barrel:diamondbarrel' })
	
	event.shaped('iron_barrel:netherbarrel', ['AAA', 'ACA', 'AAA'], {
        A: 'minecraft:netherite_ingot',
        C: 'iron_barrel:diamondbarrel'
    }).id(`kubejs:iron_barrel_forge/netherbarrel`)
	
})
