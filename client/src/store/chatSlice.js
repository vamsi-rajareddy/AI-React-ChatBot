import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        currentChatId: null,
        chats: [],
        loading: false
    },
    reducers: {
        storeMessage: (state, action) => {
            const { message, chatId } = action.payload;
            const chat = state.chats.find(chat => chat.id === chatId)
            if (chat) {
                chat.messages.push(message);
            } else {
                state.chats.push({
                    id: chatId,
                    messages: [message],
                })
            }
            state.loading = true;
        },
        storeResponse: (state, action) => {
            const { content, role, chatId } = action.payload
            const chat = state.chats.find(chat => chat.id === chatId)
            if (chat) {
                chat.messages.push({
                    role,
                    content
                })
            }
            state.loading = false;
        },
        setCurrentChatId: (state, action) => {
            state.currentChatId = action.payload;
        }
    }
})

export const { setCurrentChatId, storeMessage, storeResponse } = chatSlice.actions;
export default chatSlice.reducer;