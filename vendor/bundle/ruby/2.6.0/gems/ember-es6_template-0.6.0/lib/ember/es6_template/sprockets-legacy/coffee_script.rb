module Ember
  module ES6Template
    class CoffeeScript < Tilt::CoffeeScriptTemplate
      self.default_mime_type = 'application/javascript'

      def evaluate(scope, locals, &block)
        filename = scope.pathname.to_s

        @output ||=
          if es6?(filename)
            ::CoffeeScript.compile(data, options.merge(bare: true))
          else
            ::CoffeeScript.compile(data, options)
          end
      end

      private

      def es6?(filename)
        File.basename(filename) =~ /\.(?:module|es6)\.coffee/
      end
    end
  end
end
