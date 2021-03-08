lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'ember/cli/assets/version'

Gem::Specification.new do |spec|
  spec.name          = 'ember-cli-assets'
  spec.version       = Ember::CLI::Assets::VERSION
  spec.authors       = ['Ryunosuke SATO']
  spec.email         = ['tricknotes.rs@gmail.com']

  spec.summary       = %q{The assets for Ember CLI.}
  spec.description   = %q{The assets for Ember CLI.}
  spec.homepage      = 'https://github.com/tricknotes/ember-cli-assets'
  spec.license       = 'MIT'

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) } + Dir['vendor/**/*']
  spec.bindir        = 'exe'
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ['lib']

  spec.add_development_dependency 'bundler', '~> 1.8'
  spec.add_development_dependency 'rake', '~> 10.0'
  spec.add_development_dependency 'minitest', '~> 5.0'
end
