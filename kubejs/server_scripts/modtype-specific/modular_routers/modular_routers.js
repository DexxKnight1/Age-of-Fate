onEvent('recipes', (event) => {

    event.remove({output: 'modularrouters:item_router'})
    
    event.shaped('2x modularrouters:item_router', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:iron_ingot',
        B: 'immersiveengineering:sheetmetal_aluminum',
        C: 'rftoolscontrol:ram_chip'
    }).id(`kubejs:modularrouters/item_router`)

})
