require 'ember/es6_template/version'
require 'ember/es6_template/config'

require 'sprockets'
require 'babel/transpiler'

module Ember
  module ES6Template
    case Sprockets::VERSION
    when /^2\./
      require 'ember/es6_template/sprockets-legacy'
    when /^[34]\./
      require 'ember/es6_template/sprockets'
    else
      raise "Unsupported sprockets version: #{Sprockets::VERSION}"
    end

    def self.configure
      yield config if block_given?
    end

    def self.config
      @config ||= Config.new
    end
  end
end
