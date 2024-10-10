interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name' // в переменную key в данном случае можно записать только либо значение 'name' либо 'age'
key = 'age'

// key = 'job' // error

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email' // тут мы создали новый тип, в котором убрали '_id' и 'createdAt' из типа User
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'
// тут мы забрали только 'name' и 'email' из типа User
 
let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id'
