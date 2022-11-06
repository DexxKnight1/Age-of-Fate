onEvent('recipes', (event) => {
	
  const idRemovals = [    
    'projectred-exploration:copper_block',
    'projectred-exploration:silver_block',
    'projectred-exploration:tin_block'
  ]

  idRemovals.forEach((id) => {
    event.remove({ id: id })
  })

})
