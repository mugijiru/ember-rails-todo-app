module Ember
  module ES6Template
    class ES6Module
      def self.instance
        @instance ||= new(Ember::ES6Template.config)
      end

      def self.call(input)
        instance.call(input)
      end

      def initialize(config = Config.new)
        @config = config
      end

      def call(input)
        data = input[:data]

        dependencies = [
          input[:load_path],
          input[:name],
          data
        ]

        result = input[:cache].fetch(_cache_key + dependencies) do
          transform(data, input)
        end

        result['code']
      end

      private

      def transform(data, input)
        Babel::Transpiler.transform(data,
          'modules' => 'amdStrict',
          'moduleIds' => true,
          'sourceRoot' => input[:load_path],
          'moduleRoot' => nil,
          'filename' => module_name(input)
        )
      end

      def _cache_key
        [
          self.class.name,
          VERSION,
          Babel::Transpiler.version,
          Babel::Transpiler.source_version,
          @config.to_hash
        ]
      end

      def module_name(input)
        module_name = input[:name]

        if input[:filename][File.expand_path(input[:name] + '/index', input[:load_path])]
          if module_name == '.'
            module_name = 'index'
          else
            module_name += '/index'
          end
        end

        paths = []
        paths << @config.module_prefix if @config.prefix_pattern =~ module_name
        paths << module_name

        paths.compact.join('/')
      end
    end
  end
end
