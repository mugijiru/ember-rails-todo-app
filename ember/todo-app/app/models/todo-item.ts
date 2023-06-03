import Model, { attr } from '@ember-data/model'

export default class TodoItem extends Model {
  @attr
  declare name: string
  @attr
  declare body?: string
  @attr
  declare isCompleted: boolean
}
