//priority: 1001
let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
let vanillaMetals = ['iron', 'gold']
let atoMetals = ['aluminum', 'osmium', 'platinum', 'zinc', 'uranium', 'tin', 'lead', 'silver', 'nickel', 'zinc', 'copper']
let atmMetals = ['allthemodium', 'vibranium', 'unobtainium']
let immersiveMetals = ['aluminum', 'lead', 'nickel', 'silver', 'uranium', 'copper']
let immersiveAlloys = ['steel', 'electrum', 'constantan']
let mekanismMetals = ['osmium', 'lead', 'tin', 'uranium', 'copper']
let mekanismAlloys = ['steel', 'refined_obsidian', 'refined_glowstone', 'bronze']
let thermalMetals = ['copper', 'tin', 'lead', 'silver', 'nickel']
let thermalAlloys = ['bronze', 'electrum', 'invar', 'constantan', 'signalum', 'enderium', 'lumium']
let createMetals = ['copper', 'zinc']
let createAlloys = ['brass']
let iceAndFireMetals = ['copper', 'silver']
let projectRedMetals = ['copper', 'tin', 'silver']
let tconstructMetals = ['copper']
let eidolonMetals = ['lead']

let draconicFusion = (event, output, craftingTier, energy, middleItem, ingredientList) => {
  //crafting tier: 1.draconium, 2.wyvern, 3.draconic, 4.chaotic
  let tiers = ['WYVERN', 'DRACONIC', 'CHAOTIC']
  event.custom({
    type: 'draconicevolution:fusion_crafting',
    result: { item: output },
    catalyst: { item: middleItem },
    total_energy: energy,
    tier: (craftingTier > 4 && craftingTier <= 1) ? 'DRACONIUM' : tiers[craftingTier - 2],
    ingredients: ingredientList.map(item => (item.charAt(0) === '#') ? { tag: item.substring(1) } : { item: item })
  }).id(`kubejs:fusion_crafting/${output.replace(':', '/')}`)
}

let modifyShaped = (event, result, count, pattern, ingredients) => {
  event.remove({ output: result, type: 'minecraft:crafting_shaped' })
  event.shaped(item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(':', '/')}`)
}

let modifyShapeless = (event, result, count, ingredients) => {
  event.remove({ output: result, type: 'minecraft:crafting_shapeless' })
  event.shapeless(item.of(result, count), ingredients).id(`kubejs:shapeless/${result.replace(':', '/')}`)
}

let modifySmelt = (event, result, ingredients) => {
  event.remove({ output: result, type: 'minecraft:smelting' })
  event.smelting(result, ingredients).id(`kubejs:smelting/${result.replace(':', '/')}`)
}

let removeRecipeByID = (event, recipes) => {
  recipes.forEach(recipe => {
    event.remove({ id: recipe })
  })
}

let removeRecipeByOutput = (event, recipes) => {
  recipes.forEach(recipe => {
    if (Array.isArray(recipe)) {
      event.remove({ type: recipe[1], output: recipe[0] })
    } else {
      event.remove({ output: recipe })
    }
  })
}

let woodcutting = (event, entries) => {
  entries.forEach(([input, output, count]) => {
    event.custom({
      type: "charm:woodcutting",
      ingredient: { item: input },
      result: output,
      count: count
    }).id(`kubejs:woodcutting/${output.replace(':', '/')}`)
  })
}
