let messages = []

let id = 0

const createMessage = (request, response) => {
    const {text, time} = request.body

    messages.push({id, text, time})
    id++

    response.status(200).send(messages)
}

const getMessage = (request, response) => {
    response.status(200).send(messages)
}

const updateMesssage = (req, response) => {
    const {text} = req.body
    const updateId = req.params.id
    const messageIndex = messages.findIndex(message => message.id == updateId)
    let message = messages[messageIndex]

    messages[messageIndex] = {
        id: message.id,
        text: text || message.text,
        time: message.time
    }

    response.status(200).send(messages)
}

const deleteMessage = (req, response) => {
    const deleteId = req.params.id
    messageIndex = messages.findIndex(message => message.id == deleteId)
    messages.splice(messageIndex, 1)
    response.status(200).send(messages)
}

module.exports = {
    createMessage,
    getMessage,
    updateMesssage,
    deleteMessage
}