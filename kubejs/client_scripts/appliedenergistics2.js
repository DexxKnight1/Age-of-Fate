onEvent('jei.hide.items', (event) => {

    event.hide(/appliedenergistics2:facade/)
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:nether_star_block'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:nether_star_block_1x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:nether_star_block_2x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:nether_star_block_3x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:nether_star_block_4x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:nether_star_block_5x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:nether_star_block_6x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:nether_star_block_7x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:nether_star_block_8x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:nether_star_block_9x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:atm_star_block'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:atm_star_block_1x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:atm_star_block_2x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:atm_star_block_3x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:atm_star_block_4x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:atm_star_block_5x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:atm_star_block_6x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:atm_star_block_7x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:atm_star_block_8x'})
    event.hide('appliedenergistics2:facade', {item: 'allthecompressed:atm_star_block_9x'})

})

onEvent('jei.add.items', (event) => {

    event.add(Item.of('appliedenergistics2:facade', { item: 'minecraft:stone' }))
})

onEvent('client.item_tooltip', (event) => {

    if (event.item.equals(Item.of('appliedenergistics2:facade', { item: 'minecraft:stone' }))) {
        event.add(
            text.yellow(
                'Facades are not disabled, just hidden in JEI. To craft facades, place the block of your choice in the centre of the crafting grid (3x3) and four AE2 cable anchors on all adjacent sides of that block.'
            )
        )
    }
})
