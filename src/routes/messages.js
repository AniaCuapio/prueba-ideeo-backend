const express = require('express')
const messages = require('../usecases/messages')
const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allMessages = await messages.getAll()
    response.json({
      success: true,
      data: {
        messages: allMessages,
      },
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const id = request.params.id
    const messageById = await messages.getById(id)
    response.json({
      success: true,
      data: {
        message: messageById
      },
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})



router.post('/', async (request, response) => {
  try {
    const newmessagesData = request.body
    const newmessage = await messages.create(newmessagesData)
    response.json({
      success: true,
      data: {
        newmessage,
      },
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const id = request.params.id
    const remove = await messages.remove(id)
    response.json({
      success: true,
      message: 'message deleted',
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const id = request.params.id
    const newMessageData = request.body
    const refresh = await messages.update(id, newMessageData)
    response.json({
      success: true,
      data: {
        refresh
      },
      message: 'refreshed succesfully',
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

module.exports = router
