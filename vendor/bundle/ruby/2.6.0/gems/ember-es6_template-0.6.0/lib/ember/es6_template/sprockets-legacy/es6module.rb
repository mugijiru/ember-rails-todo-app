module Ember
  module ES6Template
    class ES6Module < ::Tilt::Template
      def self.default_mime_type
        'application/javascript'
      end

      def prepare; end

      def evaluate(scope, locals, &block)
        env = scope.environment

        result = Babel::Transpiler.transform(data,
          'modules' => 'amdStrict',
          'moduleIds' => true,
          'sourceRoot' => env.root,
          'moduleRoot' => nil,
          'filename' => module_name(scope.logical_path)
        )

        result['code']
      end

      private

      def module_name(path)
        paths = []
        paths << config.module_prefix if config.prefix_pattern =~ path
        paths << path

        paths.compact.join('/')
      end

      def config
        Ember::ES6Template.config
      end
    end
  end
end
