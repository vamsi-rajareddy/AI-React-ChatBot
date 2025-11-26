const messageHandler = async (socket, data) => {

    const aiResponseContent = {
        chatId: data.id,
        content: 'Response from AI',
        role: 'assistant'
    }
    socket.emit('ai-response', aiResponseContent)
}

module.exports = { messageHandler } 