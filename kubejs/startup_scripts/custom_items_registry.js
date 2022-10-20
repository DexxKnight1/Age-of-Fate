events.listen('item.registry', (event) => {

  const items = [
		'explorershat',
		'trading_permission'
  ]

  items.forEach((item) => {
      event.create(item).group('KubeJS').texture(`kubejs:item/${item}`)
  })

})

events.listen('block.registry', (event) => {

  const items = [
		'magical_soil'
  ]

  items.forEach((item) => {
    event.create(item).group('KubeJS').texture(`kubejs:block/${item}`)
  })
})
