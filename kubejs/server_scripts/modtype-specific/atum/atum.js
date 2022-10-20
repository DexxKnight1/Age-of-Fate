onEvent('recipes', (event) => {

    const idRemovals = [
        'atum:white_bed',
        'atum:orange_bed',
        'atum:magenta_bed',
        'atum:light_blue_bed',
        'atum:yellow_bed',
        'atum:lime_bed',
        'atum:pink_bed',
        'atum:gray_bed',
        'atum:light_gray_bed',
        'atum:cyan_bed',
        'atum:purple_bed',
        'atum:blue_bed',
        'atum:brown_bed',
        'atum:green_bed',
        'atum:red_bed',
        'atum:black_bed',
        'atum:white_concrete_powder',
        'atum:orange_concrete_powder',
        'atum:magenta_concrete_powder',
        'atum:light_blue_concrete_powder',
        'atum:yellow_concrete_powder',
        'atum:lime_concrete_powder',
        'atum:pink_concrete_powder',
        'atum:gray_concrete_powder',
        'atum:light_gray_concrete_powder',
        'atum:cyan_concrete_powder',
        'atum:purple_concrete_powder',
        'atum:blue_concrete_powder',
        'atum:brown_concrete_powder',
        'atum:green_concrete_powder',
        'atum:red_concrete_powder',
        'atum:black_concrete_powder',
        'atum:repeater',
        'atum:comparator',
        'atum:grindstone',
        'atum:book',
        'atum:ore_fire_charge',
        'atum:pumpkin_pie'

    ]

    idRemovals.forEach((id) => {
        event.remove({ id: id })
    })

})
