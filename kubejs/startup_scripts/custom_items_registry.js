onEvent('item.registry', (event) => {

  const items = [
		'explorershat',
		'trading_permission'
  ]

  items.forEach((item) => {
    event.create(item).texture(`kubejs:item/${item}`)
  })

})

onEvent('block.registry', (event) => {

  const items = [
		'magical_soil'
  ]

  items.forEach((item) => {
    event.create(item).displayName('§dMagical Soil').texture(`kubejs:block/${item}`)
  })
})
