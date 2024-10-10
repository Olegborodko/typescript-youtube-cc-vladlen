function strip(x: string | number) {
  if (typeof x === 'number') { // в зависимости от параметра возвращается свое значение
    return x.toFixed(2)
  }
  return x.trim()
}

class MyResponse {
  header = 'response header'
  result = 'response result'
}

class MyError {
  header = 'error header'
  message = 'error message'
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) { // проверяем какой класс приходит в параметрах
    return {
      info: res.header + res.result
    }
  } else {
    return {
      info: res.header + res.message
    }
  }
}

// ===================

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
  // ....
}

setAlertType('success')
setAlertType('warning')

// setAlertType('default') // error
