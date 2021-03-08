begin
  require 'coffee_script'
rescue LoadError => e
  raise e unless ['cannot load such file -- coffee_script', 'no such file to load -- coffee_script'].include?(e.message)
end

require 'ember/es6_template/sprockets-legacy/es6'
require 'ember/es6_template/sprockets-legacy/es6module'
require 'ember/es6_template/sprockets-legacy/coffee_script'

module Ember
  module ES6Template
    def self.setup(env)
      env.register_engine '.es6', ES6
      env.register_engine '.module', ES6Module
      env.register_engine '.coffee', CoffeeScript if defined?(::CoffeeScript)
    end
  end
end
