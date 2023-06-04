import JSONAPIAdapter from '@ember-data/adapter/json-api'
import { underscore } from '@ember/string'
import ModelRegistry from 'ember-data/types/registries/model' // eslint-disable-line ember/use-ember-data-rfc-395-imports
import { pluralize } from 'ember-inflector'

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api/v1'

  pathForType(type: keyof ModelRegistry) {
    const underscored = underscore(type as string) // TODO: なぜか型が合わない
    return pluralize(underscored)
  }

  headers = {
    // test 環境では CSRF Token は吐かれないので ?. で逃げる
    'X-CSRF-Token': document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute('content'),
  }
}
