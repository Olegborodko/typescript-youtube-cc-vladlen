// Определяем пространство имен MathOperations
namespace MathOperations {
  // Функция для сложения двух чисел
  export function add(a: number, b: number): number {
      return a + b;
  }

  // Функция для вычитания двух чисел
  export function subtract(a: number, b: number): number {
      return a - b;
  }

}

// Используем функции из пространства имен
const sum = MathOperations.add(10, 5);
const difference = MathOperations.subtract(10, 5);

console.log(`Сумма: ${sum}`);           // Сумма: 15
console.log(`Разность: ${difference}`); // Разность: 5


// =========================== объединения пространства имен

// Первое определение пространства имен
namespace Animals {
  export class Dog {
      bark() {
          return "Гав!";
      }
  }
}

// Второе определение того же пространства имен
namespace Animals {
  export class Cat {
      meow() {
          return "Мяу!";
      }
  }
}

// Используем классы из объединенного пространства имен
const dog = new Animals.Dog();
console.log(dog.bark()); // Гав!

const cat = new Animals.Cat();
console.log(cat.meow()); // Мяу!