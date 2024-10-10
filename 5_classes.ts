class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

class Car2 {
  readonly model: string
  readonly numberOfWheels: number = 4

  constructor(theModel: string) {
    this.model = theModel // поле можно перезаписать, хотя оно readonly, но сделать это можно только внутри конструктора
  }
}

// класс Car полностью такой-же как и класс Car2, все остальное просто добавляет typescript при компиляции
class Car {
  readonly numberOfWheels: number = 4
  constructor(readonly model: string) {}
}
// ==============


class Animal {
  protected voice: string = ''
  public color: string = 'black'
  // protected, public и private это модификаторы, 
  // если не писать никакого то по умолчанию будет public

  constructor() {
    this.go()
  }

  private go() { // модификаторы можно задавать функциям
    console.log('Go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)
// cat.voice

// =====================

// абстрактные классы, нужны для того что-бы от них наследоваться,
// по сути они для того что-бы указать какие методы обязательно должны присутствовать у наследуемые классов
abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render')
  }

  info(): string {
    return 'This is info';
  }
}

