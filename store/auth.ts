import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'

import User from '@/interfaces/User'

interface AuthState {
    users: Ref<Array<User>>;
    user: Ref<User>;
}

export const useAuth = defineStore('auth', {
    state: (): AuthState => ({
        user: ref({}),
        token: null, // JWT 
    }),
    actions: {
        // addToCart(item) {
        //     this.cartItems.push(item)
        // }
    },
    getters: {
        user : (state) => state.user
    }

})
