module Ember
  module ES6Template
    module CoffeeScriptHelper
      def call(input)
        data = input[:data]

        result = input[:cache].fetch(_cache_key + [data]) do
          if es6?(input[:filename])
            transform(
              Sprockets::Autoload::CoffeeScript.compile(data, bare: true),
              input
            )
          else
            code = Sprockets::Autoload::CoffeeScript.compile(data, bare: false)

            {'code' => code}
          end
        end

        result['code']
      end

      private

      def _cache_key
        [
          self.class.name,
          VERSION,
          Babel::Transpiler.version,
          Babel::Transpiler.source_version,
          Sprockets::Autoload::CoffeeScript.version
        ]
      end

      def es6?(filename)
        File.basename(filename) =~ /\.(?:es6|module)\./
      end
    end
  end
end
