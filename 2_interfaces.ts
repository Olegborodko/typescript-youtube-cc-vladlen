interface Rect {
  readonly id: string // только читаемый
  color?: string // не обязательный параметр
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30
  },
  color: '#ccc'
}

const rect2: Rect = {
  id: '12345',
  size: {
    width: 10,
    height: 5
  }
}

rect2.color = 'black'
// rect2.id = '3232'

const rect3 = {} as Rect // в этом случае ts не проверяет наличие всех полей, и доверяет вам
const rect4 = <Rect>{} // как и здесь

// const rect5: Rect = {} // при такой записи проверка будет выполняться
const rect6: Partial<Rect> = {
  color: '123'
} // а так можно указывать или не указывать поля, но нельзя использовать те поля которыx нет в interface

rect1.color = 'white';
// rect1.id = '456'; значение id изменить нельзя так-как указано readonly

// =====================

interface RectWithArea extends Rect { // наследование от другого интерфейса
  getArea: () => number // мы добавили еще функцию, которая должна вернуть число
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

// ==================

interface IClock {
  time: Date
  setTime(date: Date): void // эта функция ничего не будет возвращать (void)
}

// класс Clock в данном случае имплиминтируется от интерфейса IClock и должен иметь все свойства и методы интерфейса IClock
class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }
}

// =================

// что-бы не указывать все свойства, мы указываем просто тип ключа, и какого типа будет значение
interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}


