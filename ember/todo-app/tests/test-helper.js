import Application from 'todo-app/app'
import config from 'todo-app/config/environment'
import * as QUnit from 'qunit'
import { setApplication } from '@ember/test-helpers'
import { setup } from 'qunit-dom'
import { start } from 'ember-qunit'
import {
  forceModulesToBeLoaded,
  sendCoverage,
} from 'ember-cli-code-coverage/test-support'

QUnit.done(async () => {
  forceModulesToBeLoaded()
  await sendCoverage()
})

setApplication(Application.create(config.APP))

setup(QUnit.assert)

start()
