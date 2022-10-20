onEvent('recipes', (event) => {

    event.remove({output: 'bloodmagic:altar'})

    event.shaped('bloodmagic:altar', ['A A', 'ABA', 'CDC'], {
        A: 'botania:livingrock',
        B: 'industrialforegoing:pitiful_generator',
        C: '#forge:ingots/gold',
        D: 'allthemodium:allthemodium_ingot'
      }).id(`kubejs:bloodmagic/altar`)

})
