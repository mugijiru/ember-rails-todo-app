import Model, { attr } from '@ember-data/model'

declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'todo-item': TodoItem
  }
}

export default class TodoItem extends Model {
  @attr
  declare name: string
  @attr
  declare body?: string
  @attr
  declare isCompleted: boolean
}
