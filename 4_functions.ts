function add(a: number, b: number): number {
  return a + b
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase()
}

// здесь указывается разрешения на то какие могут быть функции
// тоесть перегрузка для функции

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
  default: string
}

function position(): MyPosition // функция может быть без параметров
function position(a: number): MyPositionWithDefault // содержать один параметр
function position(a: number, b: number): MyPosition // либа два параметра

function position(a?: number, b?: number): MyPosition | MyPositionWithDefault {
  if (a === undefined && b === undefined) {
    return { x: undefined, y: undefined };
  }

  if (a !== undefined && b === undefined) {
    return { x: a, y: undefined, default: a.toString() };
  }

  return { x: a, y: b };
}

console.log('Empty: ', position())
console.log('One param: ', position(42))
console.log('Two params: ', position(10, 15))
