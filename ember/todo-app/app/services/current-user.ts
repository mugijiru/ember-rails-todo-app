import Service from '@ember/service'

export default class CurrentUserService extends Service {
  get email() {
    const div = document.querySelector<HTMLDivElement>('#todo-app');
    if (!div) {
      return "";
    }
    return div.dataset["email"]
  }
}
