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
        setCurrentChatId: (state, action) => {
            state.currentChatId = action.payload;
        }
    }
})

export const { setCurrentChatId, storeMessage } = chatSlice.actions;
export default chatSlice.reducer;