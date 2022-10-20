onEvent('recipes', (event) => {

    //EXPORTER'S
    event.remove({output: 'cabletiers:elite_exporter'})
    event.remove({output: 'cabletiers:ultra_exporter'})
    event.remove({output: 'cabletiers:creative_exporter'})
    
    event.shaped('cabletiers:elite_exporter', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:iron_block',
        B: 'astralsorcery:starmetal',
        C: 'refinedstorage:exporter'
    }).id(`kubejs:cabletiers/elite_exporter`)

    event.shaped('cabletiers:ultra_exporter', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:netherite_block',
        B: 'cabletiers:elite_exporter',
        C: 'extrastorage:neural_processor'
    }).id(`kubejs:cabletiers/ultra_exporter`)

    event.shaped('cabletiers:creative_exporter', ['ABD', 'BCB', 'DBA'], {
        A: 'allthecompressed:nether_star_block_1x',
        B: 'cabletiers:ultra_exporter',
        C: 'draconicevolution:reactor_core',
        D: 'overloaded:true_infinite_capacitor'
    }).id(`kubejs:cabletiers/creative_exporter`)

    //IMPORTER'S
    event.remove({output: 'cabletiers:elite_importer'})
    event.remove({output: 'cabletiers:ultra_importer'})
    event.remove({output: 'cabletiers:creative_importer'})
    
    event.shaped('cabletiers:elite_importer', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:iron_block',
        B: 'astralsorcery:starmetal',
        C: 'refinedstorage:importer'
    }).id(`kubejs:cabletiers/elite_importer`)

    event.shaped('cabletiers:ultra_importer', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:netherite_block',
        B: 'cabletiers:elite_importer',
        C: 'extrastorage:neural_processor'
    }).id(`kubejs:cabletiers/ultra_importer`)

    event.shaped('cabletiers:creative_importer', ['ABD', 'BCB', 'DBA'], {
        A: 'allthecompressed:nether_star_block_1x',
        B: 'cabletiers:ultra_importer',
        C: 'draconicevolution:reactor_core',
        D: 'overloaded:true_infinite_capacitor'
    }).id(`kubejs:cabletiers/creative_importer`)

    //CONSTRUCTORS'S
    event.remove({output: 'cabletiers:elite_constructor'})
    event.remove({output: 'cabletiers:ultra_constructor'})
    event.remove({output: 'cabletiers:creative_constructor'})
    
    event.shaped('cabletiers:elite_constructor', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:iron_block',
        B: 'astralsorcery:starmetal',
        C: 'refinedstorage:constructor'
    }).id(`kubejs:cabletiers/elite_constructor`)

    event.shaped('cabletiers:ultra_constructor', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:netherite_block',
        B: 'cabletiers:elite_constructor',
        C: 'extrastorage:neural_processor'
    }).id(`kubejs:cabletiers/ultra_constructor`)

    event.shaped('cabletiers:creative_constructor', ['ABD', 'BCB', 'DBA'], {
        A: 'allthecompressed:nether_star_block_1x',
        B: 'cabletiers:ultra_constructor',
        C: 'draconicevolution:reactor_core',
        D: 'overloaded:true_infinite_capacitor'
    }).id(`kubejs:cabletiers/creative_constructor`)

    //DESTRUCTORS'S
    event.remove({output: 'cabletiers:elite_destructor'})
    event.remove({output: 'cabletiers:ultra_destructor'})
    event.remove({output: 'cabletiers:creative_destructor'})
    
    event.shaped('cabletiers:elite_destructor', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:iron_block',
        B: 'astralsorcery:starmetal',
        C: 'refinedstorage:destructor'
    }).id(`kubejs:cabletiers/elite_destructor`)

    event.shaped('cabletiers:ultra_destructor', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:netherite_block',
        B: 'cabletiers:elite_destructor',
        C: 'extrastorage:neural_processor'
    }).id(`kubejs:cabletiers/ultra_destructor`)

    event.shaped('cabletiers:creative_destructor', ['ABD', 'BCB', 'DBA'], {
        A: 'allthecompressed:nether_star_block_1x',
        B: 'cabletiers:ultra_destructor',
        C: 'draconicevolution:reactor_core',
        D: 'overloaded:true_infinite_capacitor'
    }).id(`kubejs:cabletiers/creative_destructor`)

    //REQUETER'S
    event.remove({output: 'cabletiers:elite_requester'})
    event.remove({output: 'cabletiers:ultra_requester'})
    event.remove({output: 'cabletiers:creative_requester'})
    
    event.shaped('cabletiers:elite_requester', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:iron_block',
        B: 'astralsorcery:starmetal',
        C: 'rsrequestify:requester'
    }).id(`kubejs:cabletiers/elite_requester`)

    event.shaped('cabletiers:ultra_requester', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:netherite_block',
        B: 'cabletiers:elite_requester',
        C: 'extrastorage:neural_processor'
    }).id(`kubejs:cabletiers/ultra_requester`)

    event.shaped('cabletiers:creative_requester', ['ABD', 'BCB', 'DBA'], {
        A: 'allthecompressed:nether_star_block_1x',
        B: 'cabletiers:ultra_requester',
        C: 'draconicevolution:reactor_core',
        D: 'overloaded:true_infinite_capacitor'
    }).id(`kubejs:cabletiers/creative_requester`)

    //DISK MANIPULATOR'S
    event.remove({output: 'cabletiers:elite_disk_manipulator'})
    event.remove({output: 'cabletiers:ultra_disk_manipulator'})
    event.remove({output: 'cabletiers:creative_disk_manipulator'})
    
    event.shaped('cabletiers:elite_disk_manipulator', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:iron_block',
        B: 'astralsorcery:starmetal',
        C: 'refinedstorage:disk_manipulator'
    }).id(`kubejs:cabletiers/elite_disk_manipulator`)

    event.shaped('cabletiers:ultra_disk_manipulator', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:netherite_block',
        B: 'cabletiers:elite_disk_manipulator',
        C: 'extrastorage:neural_processor'
    }).id(`kubejs:cabletiers/ultra_disk_manipulator`)

    event.shaped('cabletiers:creative_disk_manipulator', ['ABD', 'BCB', 'DBA'], {
        A: 'allthecompressed:nether_star_block_1x',
        B: 'cabletiers:ultra_disk_manipulator',
        C: 'draconicevolution:reactor_core',
        D: 'overloaded:true_infinite_capacitor'
    }).id(`kubejs:cabletiers/creative_disk_manipulator`)

})
