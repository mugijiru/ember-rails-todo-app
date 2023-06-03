import { underscore } from '@ember/string'
import JSONAPISerializer from '@ember-data/serializer/json-api'

export default class ApplicationSerializer extends JSONAPISerializer {
  keyForAttribute(attr: string) {
    return underscore(attr)
  }

  keyForRelationship(rawKey: string) {
    return underscore(rawKey)
  }
}
