onEvent('recipes', (event) => {

  // Metal Unification
  function unifyMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
    event.replaceOutput(`#forge:ingots/${name}`, ingotItem)
    event.replaceOutput(`#forge:dusts/${name}`, dustItem)
    event.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
    event.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)

    event.remove({ input: `#forge:ores/${name}`, type: 'immersiveengineering:crusher' })
    event.remove({ input: `#forge:ingots/${name}`, type: 'immersiveengineering:crusher' })
    event.remove({ input: [`#forge:ores/${name}`, `#forge:dusts/${name}`], output: `#forge:ingots/${name}`, type: 'minecraft:smelting' })
    event.remove({ input: [`#forge:ores/${name}`, `#forge:dusts/${name}`], output: `#forge:ingots/${name}`, type: 'minecraft:blasting' })
    event.remove({ id: `appliedenergistics2:grinder/${name}_dust_ingot` })

    event.recipes.minecraft.smelting(ingotItem, `#forge:dusts/${name}`).xp(0.5)
    event.recipes.minecraft.blasting(ingotItem, `#forge:dusts/${name}`).xp(0.5)
    event.recipes.appliedenergistics2.grinder({ input: { tag: `forge:ingots/${name}` }, result: { primary: { item: dustItem } }, turns: 8 })
    event.recipes.immersiveengineering.crusher({ secondaries: [], result: { base_ingredient: { item: dustItem } }, input: { tag: `forge:ingots/${name}` }, energy: 3000 })

    if (!ingredient.of(`#forge:ores/${name}`).stacks.empty) {
      event.recipes.minecraft.smelting(ingotItem, `#forge:ores/${name}`).xp(1)
      event.recipes.minecraft.blasting(ingotItem, `#forge:ores/${name}`).xp(1)
      event.recipes.mekanism.enriching(item.of(dustItem, 2), `#forge:ores/${name}`).id(`alltheores:mek_processing/${name}/dust/from_ore`)
      event.recipes.immersiveengineering.crusher({
        secondaries: [],
        result: { count: 2, base_ingredient: { item: dustItem } },
        input: { tag: `forge:ores/${name}` },
        energy: 3000
      })
      event.remove({ id: `appliedenergistics2:grinder/${name}_dust_ore` })
      event.recipes.appliedenergistics2.grinder({
        input: { tag: `forge:ores/${name}` },
        result: { primary: { item: dustItem, count: 2 } },
        turns: 8
      })
    }

    event.replaceInput(nuggetItem, `#forge:nuggets/${name}`)
    event.replaceInput(dustItem, `#forge:dusts/${name}`)
    event.replaceInput(ingotItem, `#forge:ingots/${name}`)
    event.replaceInput(blockItem, `#forge:storage_blocks/${name}`)
  }

  function unifyCraftMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
    event.replaceInput(nuggetItem, `#forge:nuggets/${name}`)
    event.replaceInput(dustItem, `#forge:dusts/${name}`)
    event.replaceInput(ingotItem, `#forge:ingots/${name}`)
    event.replaceInput(blockItem, `#forge:storage_blocks/${name}`)

    event.replaceOutput(`#forge:ingots/${name}`, ingotItem)
    event.replaceOutput(`#forge:dusts/${name}`, dustItem)
    event.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
    event.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)
  }

  // Vanilla
  unifyMetal('gold', 'minecraft:gold_ingot', 'alltheores:gold_dust', 'minecraft:gold_block', 'minecraft:gold_nugget')
  unifyMetal('iron', 'minecraft:iron_ingot', 'alltheores:iron_dust', 'minecraft:iron_block', 'minecraft:iron_nugget')

  // Multiple Mods
  unifyMetal('aluminum', 'alltheores:aluminum_ingot', 'alltheores:aluminum_dust', 'alltheores:aluminum_block', 'alltheores:aluminum_nugget')
  unifyMetal('copper', 'alltheores:copper_ingot', 'alltheores:copper_dust', 'alltheores:copper_block', 'alltheores:copper_nugget')
  unifyMetal('lead', 'alltheores:lead_ingot', 'alltheores:lead_dust', 'alltheores:lead_block', 'alltheores:lead_nugget')
  unifyMetal('nickel', 'alltheores:nickel_ingot', 'alltheores:nickel_dust', 'alltheores:nickel_block', 'alltheores:nickel_nugget')
  unifyMetal('platinum', 'alltheores:platinum_ingot', 'alltheores:platinum_dust', 'alltheores:platinum_block', 'alltheores:platinum_nugget')
  unifyMetal('silver', 'alltheores:silver_ingot', 'alltheores:silver_dust', 'alltheores:silver_block', 'alltheores:silver_nugget')
  unifyMetal('tin', 'alltheores:tin_ingot', 'alltheores:tin_dust', 'alltheores:tin_block', 'alltheores:tin_nugget')
  unifyMetal('uranium', 'alltheores:uranium_ingot', 'alltheores:uranium_dust', 'alltheores:uranium_block', 'alltheores:uranium_nugget')
  unifyMetal('zinc', 'alltheores:zinc_ingot', 'alltheores:zinc_dust', 'alltheores:zinc_block', 'alltheores:zinc_nugget')

  // Mekanism
  unifyMetal('osmium', 'alltheores:osmium_ingot', 'alltheores:osmium_dust', 'alltheores:osmium_block', 'alltheores:osmium_nugget')

  //Craft only metals
  unifyCraftMetal('steel', 'mekanism:ingot_steel', 'mekanism:dust_steel', 'mekanism:block_steel', 'mekanism:nugget_steel')
  unifyCraftMetal('arcane_gold', 'eidolon:arcane_gold_ingot', 'eidolon:arcane_gold_block', 'eidolon:arcane_gold_nugget')
  unifyCraftMetal('arcane_gold', 'forbidden_arcanus:arcane_gold_ingot', 'forbidden_arcanus:arcane_gold_block', 'forbidden_arcanus:arcane_gold_nugget')

  //Thermal
  unifyCraftMetal('bronze', 'thermal:bronze_ingot', 'thermal:bronze_dust', 'thermal:bronze_block', 'thermal:bronze_nugget')
  unifyCraftMetal('constantan', 'thermal:constantan_ingot', 'thermal:constantan_dust', 'thermal:constantan_block', 'thermal:constantan_nugget')
  unifyCraftMetal('electrum', 'thermal:electrum_ingot', 'thermal:electrum_dust', 'thermal:electrum_block', 'thermal:electrum_nugget')

  // Plate Unification
  function plateCasting(material, coolingTime, result) {
      let alltheores = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc']
      let fluid = alltheores.includes(material) ? { tag: `forge:molten_${material}`, amount: 144 } : { name: `tconstruct:molten_${material}`, amount: 144 }
  
      event.custom({
        type: 'tconstruct:casting_table',
        conditions: [
          {
            value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
            type: 'forge:not'
          }
        ],
        cast: { tag: 'tconstruct:casts/multi_use/plate' },
        fluid: fluid,
        result: { item: result },
        cooling_time: coolingTime
      }).id(`kubejs:smeltery/casting/metal/${material}/plate_gold_cast`)
      event.custom({
        type: 'tconstruct:casting_table',
        conditions: [
          {
            value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
            type: 'forge:not'
          }
        ],
        cast: { tag: 'tconstruct:casts/single_use/plate' },
        cast_consumed: true,
        fluid: fluid,
        result: { item: result },
        cooling_time: coolingTime
      }).id(`kubejs:smeltery/casting/metal/${material}/plate_sand_cast`)
  }
  
  function platePressing(material, result) {
      event.custom({
        type: 'immersiveengineering:metal_press',
        mold: { item: 'immersiveengineering:mold_plate' },
        result: { item: result },
        conditions: [
          {
            value: { tag: `forge:ingots/${material}`, type: 'forge:tag_empty' },
            type: 'forge:not'
          },
          {
            value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
            type: 'forge:not'
          }
        ],
        input: { tag: `forge:ingots/${material}` },
        energy: 2400
      }).id(`kubejs:metalpress/plate_${material}`)
  }
  
  function plateProcessing(types) {
      types.forEach(([material, coolingTime, result]) => {
        event.replaceInput(`thermal:${material}_plate`, `#forge:plates/${material}`)
        event.replaceInput(`immersiveengineering:plate_${material}`, `#forge:plates/${material}`)
        event.replaceInput(material === 'gold' ? `create:${material}en_sheet` : `create:${material}_sheet`, `#forge:plates/${material}`)
  
        result = result ? result : `thermal:${material}_plate`
  
        event.remove({ id: `immersiveengineering:crafting/plate_${material}_hammering` });
        event.shapeless(result, [`#forge:ingots/${material}`, '#misctags:immersive_engineering_hammer']).id(`kubejs:crafting/plate_${material}_hammering`);
  
        event.remove({ id: `create:pressing/${material}_ingot` })
        event.remove({ id: `createaddition:pressing/${material}_ingot` })
        event.recipes.create.pressing(result, `#forge:ingots/${material}`).id(`kubejs:pressing/${material}_ingot`)
  
        if (coolingTime !== null) {
          event.remove({ id: `tconstruct:smeltery/casting/metal/${material}/plate_gold_cast` })
          event.remove({ id: `tconstruct:smeltery/casting/metal/${material}/plate_sand_cast` })
          plateCasting(material, coolingTime, result)
        }
  
        event.remove({ id: `immersiveengineering:metalpress/plate_${material}` })
        platePressing(material, result)
  
        event.remove({ id: `thermal:machine/press/press_${material}_ingot_to_plate` })
        event.recipes.thermal.press(result, `#forge:ingots/${material}`).id(`kubejs:machine/press/press_${material}_ingot_to_plate`)
      })
  }
  
  plateProcessing([
      ['aluminum', 47, 'immersiveengineering:plate_aluminum'],
      ['steel', 50, 'immersiveengineering:plate_steel'],
      ['uranium', 50, 'immersiveengineering:plate_uranium'],
      ['iron', 60],
      ['gold', 57],
      ['copper', 50],
      ['tin', 39],
      ['lead', 43],
      ['silver', 60],
      ['nickel', 65],
      ['bronze', 57],
      ['electrum', 59],
      ['invar', 63],
      ['constantan', 64],
      ['signalum', null],
      ['lumium', null],
      ['enderium', null],
      ['brass', 57, 'create:brass_sheet'],
  ])

  // Tinkers Unification
  function tinkerMelting(material, type, typeValues, temperature, time, byproduct) {
      let recipe = {
        type: 'tconstruct:melting',
        ingredient: { tag: `forge:${type}/${material}` },
        result: { fluid: `alltheores:molten_${material}`, amount: typeValues.amount },
        temperature: temperature,
        time: time * typeValues.multiplier
      }
      event.custom(type != 'ores' ? recipe : Object.assign({ byproducts: byproduct }, recipe)).id(`kubejs:melting/${type}/${material}`)
  }
  function tinkerCreateCompat(material, temperature, time, molten_namespace) {
      event.custom({
        type: 'tconstruct:melting',
        ingredient: { item: `create:crushed_${material}_ore` },
        result: { fluid: `${molten_namespace}:molten_${material}`, amount: 144 },
        temperature: temperature,
        time: time * 29.4
      }).id(`kubejs:melting/crushed_ore/${material}`)
  }
  function tinkerAlloys(entries) {
      entries.forEach(([output, outputAmount, temperature, inputs]) => {
        event.remove({ id: `tconstruct:smeltery/alloys/molten_${output}` })
        event.custom({
          type: 'tconstruct:alloy',
          inputs: inputs,
          result: { fluid: `tconstruct:molten_${output}`, amount: outputAmount },
          temperature: temperature
        }).id(`kubejs:melting/alloys/${output}`)
      })
  }
  function unifyTinkers(entries) {
      let meltingTypes = ['block', 'can', 'coin', 'dust', 'gear', 'ingot', 'nugget', 'ore', 'plates', 'rod', 'sheetmetal']
      let meltingTypeValues = {
        storage_blocks: { amount: 1296, multiplier: 88.125 },
        dusts: { amount: 144, multiplier: 21.75 },
        gears: { amount: 576, multiplier: 58.8 },
        ingots: { amount: 144, multiplier: 29.4 },
        nuggets: { amount: 16, multiplier: 10.0 },
        ores: { amount: 288, multiplier: 44.1 },
        plates: { amount: 144, multiplier: 29.4 },
        rods: { amount: 72, multiplier: 5.88 },
        sheetmetals: { amount: 144, multiplier: 29.4 }
      }
      let meltingParts = ['broad_axe_head', 'broad_blade', 'hammer_head', 'large_plate', 'pickaxe_head', 'repair_kit', 'small_axe_head', 'small_blade', 'tool_binding', 'tool_handle', 'tough_handle']
  
      entries.forEach(([material, temperature, time, types, byproduct]) => {
        event.replaceInput(`tconstruct:${material}_ingot`, `#forge:ingots/${material}`)
        event.replaceInput(`tconstruct:${material}_block`, `#forge:storage_blocks/${material}`)
        event.replaceOutput(`tconstruct:${material}_ingot`, `alltheores:${material}_ingot`)
        event.replaceOutput(`tconstruct:${material}_block`, `alltheores:${material}_block`)
  
        tinkerCreateCompat(material, temperature, time, 'alltheores');
  
        meltingTypes.forEach(meltingType => {
          event.remove({ id: `tconstruct:smeltery/melting/metal/${material}/${meltingType}` })
          for (let type in meltingTypeValues) if (types.includes(type)) tinkerMelting(material, type, meltingTypeValues[type], temperature, time, byproduct)
        })
        meltingParts.forEach(meltingPart => event.remove({ id: `tconstruct:tools/parts/melting/${meltingPart}/tconstruct/${material}` }))
      })
  }
  function tinkerAlloyMelting(entries) {
      entries.forEach(([input, outputItem, outputBlock, outputNugget]) => {
        event.remove({ id: `tconstruct:smeltery/casting/metal/${input}/block` })
  
        event.remove({ id: `tconstruct:smeltery/casting/metal/${input}/ingot_gold_cast` })
        event.remove({ id: `tconstruct:smeltery/casting/metal/${input}/ingot_sand_cast` })
  
        event.remove({ id: `tconstruct:smeltery/casting/metal/${input}/nugget_gold_cast` })
        event.remove({ id: `tconstruct:smeltery/casting/metal/${input}/nugget_sand_cast` })
  
        event.custom({
          type: 'tconstruct:casting_basin',
          fluid: { tag: `tconstruct:molten_${input}`, amount: 1296 },
          result: { item: `${outputBlock}` },
          cooling_time: 171
        }).id(`kubejs:smeltery/casting/metal/${input}/block`)
  
        event.custom({
          type: 'tconstruct:casting_table',
          cast: { tag: 'tconstruct:casts/multi_use/ingot' },
          fluid: { tag: `tconstruct:molten_${input}`, amount: 144 },
          result: { item: `${outputItem}` },
          cooling_time: 57
        }).id(`kubejs:smeltery/casting/metal/${input}/ingot_gold_cast`)
        event.custom({
          type: 'tconstruct:casting_table',
          cast: { tag: 'tconstruct:casts/single_use/ingot' },
          cast_consumed: true,
          fluid: { tag: `tconstruct:molten_${input}`, amount: 144 },
          result: { item: `${outputItem}` },
          cooling_time: 57
        }).id(`kubejs:smeltery/casting/metal/${input}/ingot_sand_cast`)
  
        event.custom({
          type: 'tconstruct:casting_table',
          cast: { tag: 'tconstruct:casts/multi_use/nugget' },
          fluid: { tag: `tconstruct:molten_${input}`, amount: 16 },
          result: { item: `${outputNugget}` },
          cooling_time: 19
        }).id(`kubejs:smeltery/casting/metal/${input}/nugget_gold_cast`)
        event.custom({
          type: 'tconstruct:casting_table',
          cast: { tag: 'tconstruct:casts/single_use/nugget' },
          cast_consumed: true,
          fluid: { tag: `tconstruct:molten_${input}`, amount: 16 },
          result: { item: `${outputNugget}` },
          cooling_time: 19
        }).id(`kubejs:smeltery/casting/metal/${input}/nugget_sand_cast`)
      })
  }
  
  tinkerAlloyMelting([
      ['bronze', 'thermal:bronze_ingot', 'thermal:bronze_block', 'thermal:bronze_nugget'],
      ['constantan', 'thermal:constantan_ingot', 'thermal:constantan_block', 'thermal:constantan_nugget'],
      ['electrum', 'thermal:electrum_ingot', 'thermal:electrum_block', 'thermal:electrum_nugget']
  ])
  
  unifyTinkers([
      [
        'aluminum',
        425,
        1.6,
        ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores', 'plates', 'rods', 'sheetmetals'],
        [{ fluid: 'tconstruct:molten_iron', amount: 48 }]
      ],
      [
        'copper',
        500,
        1.7,
        ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
        [{ fluid: 'tconstruct:molten_gold', amount: 16 }]
      ],
      [
        'lead',
        330,
        1.4,
        ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
        [{ fluid: 'alltheores:molten_silver', amount: 48 }]
      ],
      [
        'nickel',
        950,
        2.2,
        ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
        [{ fluid: 'alltheores:molten_platinum', amount: 16 }]
      ],
      [
        'osmium',
        975,
        2.2,
        ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
        [{ fluid: 'tconstruct:molten_iron', amount: 48 }]
      ],
      [
        'platinum',
        970,
        2.2,
        ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
        [{ fluid: 'tconstruct:molten_gold', amount: 48 }]
      ],
      [
        'silver',
        790,
        2.0,
        ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
        [{ fluid: 'alltheores:molten_lead', amount: 48 }]
      ],
      [
        'tin',
        225,
        1.3,
        ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates'],
        [{ fluid: 'alltheores:molten_copper', amount: 48 }]
      ],
      [
        'uranium',
        830,
        2.0,
        ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
        [{ fluid: 'alltheores:molten_lead', amount: 48 }]
      ],
      [
        'zinc',
        420,
        1.6,
        ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
        [{ fluid: 'alltheores:molten_tin', amount: 48 }]
      ]
  ])
  
  tinkerCreateCompat('iron', 800, 60, 'tconstruct');
  tinkerCreateCompat('gold', 700, 57, 'tconstruct');
  
  tinkerAlloys([
      [
        'brass', 288, 605, [
          { tag: 'forge:molten_copper', amount: 144 },
          { tag: 'forge:molten_zinc', amount: 144 }
        ]
      ],
      [
        'bronze', 576, 700, [
          { tag: 'forge:molten_copper', amount: 432 },
          { tag: 'forge:molten_tin', amount: 144 }
        ]
      ],
      [
        'constantan', 288, 920, [
          { tag: 'forge:molten_copper', amount: 144 },
          { tag: 'forge:molten_nickel', amount: 144 }
        ]
      ],
      [
        'electrum', 288, 760, [
          { tag: 'tconstruct:molten_gold', amount: 144 },
          { tag: 'forge:molten_silver', amount: 144 }
        ]
      ],
      [
        'hepatizon', 288, 1400, [
          { tag: 'forge:molten_copper', amount: 288 },
          { tag: 'tconstruct:molten_cobalt', amount: 144 },
          { tag: 'tconstruct:molten_obsidian', amount: 1000 }
        ]
      ],
      [
        'invar', 432, 900, [
          { tag: 'tconstruct:molten_iron', amount: 288 },
          { tag: 'forge:molten_nickel', amount: 144 }
        ]
      ],
      [
        'pewter', 288, 400, [
          { tag: 'tconstruct:molten_iron', amount: 144 },
          { tag: 'forge:molten_lead', amount: 144 }
        ]
      ],
      [
        'rose_gold', 576, 550, [
          { tag: 'forge:molten_copper', amount: 432 },
          { tag: 'tconstruct:molten_gold', amount: 144 }
        ]
      ],
      [
        'tinkers_bronze', 432, 700, [
          { tag: 'forge:molten_copper', amount: 432 },
          { tag: 'tconstruct:molten_glass', amount: 1000 }
        ]
      ]
  ])

  event.replaceInput('appliedenergistics2:certus_quartz_dust', '#forge:dusts/certus_quartz')
  event.replaceInput('thermal:bitumen', '#forge:bitumen')
  event.replaceInput('lazierae2:coal_dust', '#forge:dusts/coal')
  event.replaceInput('mekanism:dust_coal', '#forge:dusts/coal')
  event.replaceInput('iceandfire:sapphire', '#forge:gems/sapphire')
  event.replaceInput('iceandfire:sapphire_block', '#forge:storage_blocks/sapphire')
  event.replaceInput('minecraft:stick', '#forge:rods/wooden')
  event.replaceInput('thermal:coal_coke', '#forge:coal_coke')
  event.replaceInput('immersiveengineering:coal_coke', '#forge:coal_coke')

  event.replaceOutput('immersivepetroleum:bitumen', 'thermal:bitumen')
  event.replaceOutput('lazierae2:coal_dust', 'mekanism:dust_coal')
  event.replaceOutput('iceandfire:sapphire_gem', 'projectred-core:sapphire')
  event.replaceOutput('iceandfire:sapphire_block', 'projectred-core:sapphire_block')
  event.replaceOutput('mekanism:sawdust', 'thermal:sawdust')
  event.replaceOutput('mekanism:dust_sulfur', 'thermal:sulfur_dust')
  event.replaceOutput('immersiveengineering:dust_sulfur', 'thermal:sulfur_dust')
  event.replaceOutput('mekanism:dust_quartz', 'thermal:quartz_dust')
  event.replaceOutput('appliedenergistics2:nether_quartz_dust', 'thermal:quartz_dust')
  event.replaceOutput('thermal:coal_coke', 'immersiveengineering:coal_coke')
  event.replaceOutput('thermal:coal_coke_block', 'immersiveengineering:coke')
  event.replaceOutput('mekanism:dust_diamond', 'thermal:diamond_dust')
  event.remove({ id: 'thermal:storage/coal_coke_block' })

  createMetals.forEach(metal => {
    removeRecipeByID(event, [
      `create:crafting/materials/${metal}_ingot_from_compacting`,
      `create:crafting/materials/${metal}_ingot_from_decompacting`,
      `create:crafting/materials/${metal}_nugget_from_decompacting`,
    ])
  })

  iceAndFireMetals.forEach(metal => {
    removeRecipeByID(event, [
      `iceandfire:${metal}_ingot`,
      `iceandfire:${metal}_block_to_ingots`,
      `iceandfire:${metal}_ingot_to_nuggets`,
    ])
  })
  
})
