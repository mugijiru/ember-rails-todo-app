import { setApplication } from '@ember/test-helpers'
import {
  forceModulesToBeLoaded,
  sendCoverage,
} from 'ember-cli-code-coverage/test-support'
import { start } from 'ember-qunit'
import setupSinon from 'ember-sinon-qunit'
import * as QUnit from 'qunit'
import { setup } from 'qunit-dom'

import Application from 'todo-app/app'
import config from 'todo-app/config/environment'

setApplication(Application.create(config.APP))

setup(QUnit.assert)
setupSinon()

start()

QUnit.done(async () => {
  forceModulesToBeLoaded()
  console.log('Sending coverage report...')
  await sendCoverage()
})
