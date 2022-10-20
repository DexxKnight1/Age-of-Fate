onEvent('recipes', (event) => {

    event.remove({output: 'glassential:glass_redstone'})
    event.remove({output: 'glassential:glass_light'})
    event.remove({output: 'glassential:glass_dark'})
    event.remove({output: 'glassential:glass_dark_ethereal'})
    event.remove({output: 'glassential:glass_dark_ethereal_reverse'})
    event.remove({output: 'glassential:glass_ethereal'})
    event.remove({output: 'glassential:glass_ethereal_reverse'})
    event.remove({output: 'glassential:glass_ghostly'})
  
    event.shaped('4x glassential:glass_redstone', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: 'allthecompressed:redstone_block_1x'
    }).id(`kubejs:glassential/glass_redstone`)
  
    event.shaped('4x glassential:glass_light', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: 'allthecompressed:glowstone_block_1x'
    }).id(`kubejs:glassential/glass_light`)

    event.shaped('4x glassential:glass_dark', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: 'allthecompressed:coal_block_1x'
    }).id(`kubejs:glassential/glass_dark`)

    event.shaped('4x glassential:glass_dark_ethereal', ['AAA', 'ABA', 'AAA'], {
        A: 'glassential:glass_dark',
        B: 'cyclic:ender_eye_reuse'
    }).id(`kubejs:glassential/glass_dark_ethereal`)

    event.shaped('4x glassential:glass_dark_ethereal_reverse', ['AAA', 'ABA', 'AAA'], {
        A: 'glassential:glass_ethereal_reverse',
        B: 'allthecompressed:coal_block_1x'
    }).id(`kubejs:glassential/glass_dark_ethereal_reverse`)

    event.shaped('4x glassential:glass_ethereal', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: 'cyclic:ender_eye_reuse'
    }).id(`kubejs:glassential/glass_ethereal`)

    event.shaped('4x glassential:glass_ethereal_reverse', ['AAA', 'ABA', 'AAA'], {
        A: 'glassential:glass_ethereal',
        B: 'allthecompressed:coal_block_1x'
    }).id(`kubejs:glassential/glass_ethereal_reverse`)

    event.shaped('4x glassential:glass_ghostly', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: 'allthecompressed:ender_pearl_block_1x'
    }).id(`kubejs:glassential/glass_ghostly`)
     
})
