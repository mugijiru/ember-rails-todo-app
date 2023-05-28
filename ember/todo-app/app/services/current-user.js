import Service from '@ember/service'

export default class CurrentUserService extends Service {
  get email() {
    return document.querySelector('#todo-app').dataset.email
  }
}
