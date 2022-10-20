onEvent('recipes', (event) => {

    event.remove({output: 'balancedflight:basic_flight_ring'})
    event.remove({output: 'balancedflight:ascended_flight_ring'})
    event.remove({output: 'balancedflight:flight_core'})

    event.shaped('balancedflight:basic_flight_ring', ['DND', 'VEU', 'DAD'], {
        D: 'minecraft:diamond_block',
        N: 'minecraft:netherite_block',
        V: 'allthemodium:vibranium_block',
        U: 'allthemodium:unobtainium_block',
        A: 'allthemodium:allthemodium_block',
        E: 'minecraft:elytra'
    }).id(`kubejs:balancedflight/basic_flight_ring`)

    event.shaped('balancedflight:ascended_flight_ring', ['CAC', 'ARA', 'DGD'], {
        C: 'botania:pixie_dust',
        A: '#forge:storage_blocks/terrasteel',
        R: 'balancedflight:flight_core',
        D: '#forge:nether_stars',
        G: 'botania:gaia_ingot'
    }).id(`kubejs:balancedflight/ascended_flight_ring`)

    event.shaped('balancedflight:flight_core', ['ABA', 'BCB', 'ABA'], {
        A: 'balancedflight:ascended_blackstone',
        B: 'botania:terrasteel_block',
        C: 'balancedflight:basic_flight_ring'
    }).id(`kubejs:balancedflight/flight_core`)

})
