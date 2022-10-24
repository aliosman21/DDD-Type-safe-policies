import { handler } from './server-policies'
const user = {
    name: 'John Doe',
    age: 16
}

handler(user).then((result) => console.log('result', result));