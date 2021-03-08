require 'ember/es6_template/sprockets/es6'
require 'ember/es6_template/sprockets/es6module'
require 'ember/es6_template/sprockets/coffee_script'
require 'ember/es6_template/sprockets/coffee_script_module'

module Ember
  module ES6Template
    def self.setup(env)
      env.register_mime_type 'application/ecmascript-6', extensions: %w(.es6)
      env.register_mime_type 'application/ecmascript-6+module', extensions: %w(.module.es6)
      env.register_mime_type 'text/coffeescript', extensions: %w(.es6.coffee .coffee)
      env.register_mime_type 'text/coffeescript+module', extensions: %w(.module.es6.coffee .module.coffee)

      env.register_transformer 'application/ecmascript-6', 'application/javascript', ES6
      env.register_transformer 'application/ecmascript-6+module', 'application/javascript', ES6Module
      env.register_transformer 'text/coffeescript', 'application/javascript', CoffeeScript
      env.register_transformer 'text/coffeescript+module', 'application/javascript', CoffeeScriptModule

      env.register_preprocessor 'application/ecmascript-6', Sprockets::DirectiveProcessor.new(comments: ["//", ["/*", "*/"]])
      env.register_preprocessor 'application/ecmascript-6+module', Sprockets::DirectiveProcessor.new(comments: ["//", ["/*", "*/"]])
      env.register_preprocessor 'text/coffeescript', Sprockets::DirectiveProcessor.new(comments: ["#", ["###", "###"]])
      env.register_preprocessor 'text/coffeescript+module', Sprockets::DirectiveProcessor.new(comments: ["#", ["###", "###"]])

      if Sprockets::VERSION =~ /^4\./
        env.register_transformer_suffix %w(
          application/ecmascript-6
          application/ecmascript-6+module
          text/coffeescript
          text/coffeescript+module
        ), 'application/\2+ruby', '.erb', Sprockets::ERBProcessor
      end
    end
  end
end

