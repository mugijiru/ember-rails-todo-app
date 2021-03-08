lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'ember/es6_template/version'

Gem::Specification.new do |spec|
  spec.name          = 'ember-es6_template'
  spec.version       = Ember::ES6Template::VERSION
  spec.authors       = ['Ryunosuke SATO']
  spec.email         = ['tricknotes.rs@gmail.com']

  spec.summary       = %q{The tilt template for Ember specified ES6.}
  spec.description   = %q{The tilt template for Ember specified ES6.}
  spec.homepage      = 'https://github.com/tricknotes/ember-es6_template'
  spec.license       = 'MIT'

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = 'exe'
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_dependency 'babel-transpiler', '>= 0.6.0', '< 0.8'
  spec.add_dependency 'sprockets', '>= 2.2', '< 4.1'

  spec.add_development_dependency 'bundler', '~> 1.7'
  spec.add_development_dependency 'rake', '~> 10.0'
  spec.add_development_dependency 'minitest', '~> 5.0'
  spec.add_development_dependency 'minitest-power_assert'
  spec.add_development_dependency 'coffee-script', '~> 2.3'
end
