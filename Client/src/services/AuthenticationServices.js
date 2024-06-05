import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}

// AuthenticationService.register({
//     email: 'example@gmail.com',
//     password: '12345678'
// })