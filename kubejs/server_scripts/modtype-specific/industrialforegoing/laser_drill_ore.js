//Author WhitePhant0m - https://github.com/KubeJS-Mods/KubeJS/issues/80#issuecomment-779821729
onEvent(`recipes`, (event) => {
    let drillB = (result, min, max, weight, lens, bList) => {
        let calc_weight = Math.ceil(weight * 0.15);

        if (calc_weight > 1) {
            event.custom({
                type: `industrialforegoing:laser_drill_ore`,
                output: Item.of(result).toResultJson(),
                rarity: [
                    {
                        whitelist: {},
                        blacklist: bList,
                        depth_min: min,
                        depth_max: max,
                        weight: weight,
                    },
                    {
                        whitelist: {},
                        blacklist: bList,
                        depth_min: 0,
                        depth_max: 255,
                        weight: calc_weight,
                    },
                ],
                pointer: 0,
                catalyst: Ingredient.of(`industrialforegoing:laser_lens${lens}`).toJson(),
            });
        } else {
            event.custom({
                type: `industrialforegoing:laser_drill_ore`,
                output: Item.of(result).toResultJson(),
                rarity: [
                    {
                        whitelist: {},
                        blacklist: bList,
                        depth_min: min,
                        depth_max: max,
                        weight: weight,
                    },
                ],
                pointer: 0,
                catalyst: Ingredient.of(`industrialforegoing:laser_lens${lens}`).toJson(),
            });
        }
    };
    let drillW = (result, min, max, weight, lens, wList) => {
        let calc_weight = Math.ceil(weight * 0.15);

        if (calc_weight > 1) {
            event.custom({
                type: `industrialforegoing:laser_drill_ore`,
                output: Item.of(result).toResultJson(),
                rarity: [
                    {
                        whitelist: wList,
                        blacklist: {},
                        depth_min: min,
                        depth_max: max,
                        weight: weight,
                    },
                    {
                        whitelist: wList,
                        blacklist: {},
                        depth_min: 0,
                        depth_max: 255,
                        weight: calc_weight,
                    },
                ],
                pointer: 0,
                catalyst: Ingredient.of(`industrialforegoing:laser_lens${lens}`).toJson(),
            });
        } else {
            event.custom({
                type: `industrialforegoing:laser_drill_ore`,
                output: Item.of(result).toResultJson(),
                rarity: [
                    {
                        whitelist: wList,
                        blacklist: {},
                        depth_min: min,
                        depth_max: max,
                        weight: weight,
                    },
                ],
                pointer: 0,
                catalyst: Ingredient.of(`industrialforegoing:laser_lens${lens}`).toJson(),
            });
        }
    };
    let drillOw = (result, min, max, weight, lens) =>
        drillB(result, min, max, weight, lens, {
            type: `minecraft:worldgen/biome`,
            values: [
                `minecraft:the_end`,
                `minecraft:the_void`,
                `minecraft:small_end_islands`,
                `minecraft:end_barrens`,
                `minecraft:end_highlands`,
                `minecraft:end_midlands`,
                "minecraft:nether_wastes",
                "minecraft:basalt_deltas",
                "minecraft:warped_forest",
                "minecraft:crimson_forest",
                "minecraft:soul_sand_valley",
            ],
        });
    let drillNet = (result, min, max, weight, lens) =>
        drillW(result, min, max, weight, lens, {
            type: `minecraft:worldgen/biome`,
            values: [
                "minecraft:nether_wastes",
                "minecraft:basalt_deltas",
                "minecraft:warped_forest",
                "minecraft:crimson_forest",
                "minecraft:soul_sand_valley",
            ],
        });
    let drillEnd = (result, min, max, weight, lens) =>
        drillW(result, min, max, weight, lens, {
            type: `minecraft:worldgen/biome`,
            values: [
                `minecraft:the_end`,
                `minecraft:the_void`,
                `minecraft:small_end_islands`,
                `minecraft:end_barrens`,
                `minecraft:end_highlands`,
                `minecraft:end_midlands`,
            ],
        });

    drillOw("rftoolsbase:dimensionalshard_overworld", 0, 32, 6, 0);
    drillOw("appliedenergistics2:quartz_ore", 33, 53, 20, 3);
    drillOw("appliedenergistics2:charged_quartz_ore", 10, 33, 10, 3);
    drillOw("mysticalagriculture:prosperity_ore", 0, 80, 20, 0);
    drillOw("mysticalagriculture:inferium_ore", 0, 32, 20, 5);
    drillOw("powah:uraninite_ore", 4, 36, 7, 13);
    drillOw("thermal:apatite_ore", 39, 48, 6, 3);

    drillNet(`mysticalagriculture:soulium_ore`, 0, 32, 20, 12);
    //drill(ore, min_height, max_height, weight, lens);
})
