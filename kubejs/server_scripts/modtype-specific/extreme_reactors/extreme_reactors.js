onEvent('recipes', (event) => {

    event.replaceInput('bigreactors:yellorium', 'alltheores:molten_uranium')
    event.replaceInput('bigreactors:yellorium_block', 'alltheores:uranium_block')

    modifyShaped(event, 'bigreactors:fluidizercasing', 1, ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:iron_ingot',
        B: 'alltheores:uranium_ingot',
        C: 'minecraft:water_bucket'
    })

    modifyShaped(event, 'bigreactors:fluidizercontroller', 1, ['ABA', 'CDC', 'AEA'], {
        A: 'bigreactors:fluidizercasing',
        B: 'minecraft:comparator',
        C: 'alltheores:uranium_ingot',
        D: 'minecraft:emerald',
        E: 'minecraft:glowstone_dust'
    })

    modifyShaped(event, 'bigreactors:fluidizersolidinjector', 1, ['ABA', 'CDC', 'ABA'], {
        A: 'bigreactors:fluidizercasing',
        B: 'alltheores:uranium_ingot',
        C: 'minecraft:redstone',
        D: 'minecraft:sticky_piston'
    })

})
