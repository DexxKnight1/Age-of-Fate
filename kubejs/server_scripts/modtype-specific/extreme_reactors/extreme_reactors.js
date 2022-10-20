onEvent('recipes', (event) => {

    event.remove({output: 'bigreactors:fluidizercasing'})
    event.remove({output: 'bigreactors:fluidizercontroller'})
    event.remove({output: 'bigreactors:fluidizersolidinjector'})

    event.replaceInput({type: 'bigreactors:fluidizerfluidmixing'}, 'bigreactors:yellorium', 'alltheores:molten_uranium')
    event.replaceInput({type: 'bigreactors:fluidizersolidmixing'}, 'yellorium_block', 'alltheores:uranium_block')

    event.shaped('bigreactors:fluidizercasing', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:iron_ingot',
        B: 'alltheores:uranium_ingot',
        C: 'minecraft:water_bucket'
    }).id(`kubejs:bigreactors/fluidizercasing`)

    event.shaped('bigreactors:fluidizercontroller', ['ABA', 'CDC', 'AEA'], {
        A: 'bigreactors:fluidizercasing',
        B: 'minecraft:comparator',
        C: 'alltheores:uranium_ingot',
        D: 'minecraft:emerald',
        E: 'minecraft:glowstone_dust'
    }).id(`kubejs:bigreactors/fluidizercontroller`)

    event.shaped('bigreactors:fluidizersolidinjector', ['ABA', 'CDC', 'ABA'], {
        A: 'bigreactors:fluidizercasing',
        B: 'alltheores:uranium_ingot',
        C: 'minecraft:redstone',
        D: 'minecraft:sticky_piston'
    }).id(`kubejs:bigreactors/fluidizersolidinjector`)

})
