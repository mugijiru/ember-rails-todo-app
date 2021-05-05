import Model, { attr } from '@ember-data/model'

export default class TodoItem extends Model {
  @attr name
  @attr body
  @attr isCompleted
}
