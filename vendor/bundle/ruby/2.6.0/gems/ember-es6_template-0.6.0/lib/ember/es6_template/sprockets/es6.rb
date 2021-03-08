module Ember
  module ES6Template
    class ES6
      def self.instance
        @instance ||= new
      end

      def self.call(input)
        instance.call(input)
      end

      def call(input)
        data = input[:data]

        dependencies = [
          input[:load_path],
          input[:filename],
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
          'modules' => 'commonStrict',
          'sourceRoot' => input[:load_path],
          'moduleRoot' => '',
          'filename' => input[:filename]
        )
      end

      def _cache_key
        [
          self.class.name,
          VERSION,
          Babel::Transpiler.version,
          Babel::Transpiler.source_version
        ]
      end
    end
  end
end
