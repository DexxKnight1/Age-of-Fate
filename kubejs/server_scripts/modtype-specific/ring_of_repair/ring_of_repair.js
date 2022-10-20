onEvent('recipes', (event) => {
	
	event.remove({id: 'ring_of_repair:ring_of_repair'})
	
	event.shaped('ring_of_repair:ring_of_repair', ['ZYZ', 'HKH', 'WWW'], {
			W: 'astralsorcery:starmetal',
            H: 'forbidden_arcanus:arcane_gold_block',
            K: '#forge:storage_blocks/terrasteel',
			Z: 'minecraft:diamond_block',
			Y: 'minecraft:emerald_block'
    }).id(`kubejs:ring_of_repair/ring_of_repair`)
	
})
