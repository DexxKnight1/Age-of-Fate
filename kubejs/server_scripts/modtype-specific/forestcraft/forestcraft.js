onEvent('recipes', (event) => {

    event.remove({output: 'forestcraft:sky_shooter'})
    event.remove({output: 'forestcraft:sky_bullet'})
    event.remove({type: 'minecraft:smithing', input: 'forestcraft:sky_shooter'})
    event.remove({type: 'minecraft:anvil', input: 'forestcraft:sky_shooter'})

})
