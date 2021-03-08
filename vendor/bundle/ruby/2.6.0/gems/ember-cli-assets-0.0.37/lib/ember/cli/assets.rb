require 'pathname'

require 'ember/cli/assets/version'

module Ember
  module CLI
    autoload :Loader, 'ember/cli/loader'
    autoload :LoadInitializer, 'ember/cli/load_initializer'
    autoload :Resolver, 'ember/cli/resolver'

    module Assets
      def self.root
        Pathname(__FILE__).join('../../../../vendor/assets')
      end
    end
  end
end
