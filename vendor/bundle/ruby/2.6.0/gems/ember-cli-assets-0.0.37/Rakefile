require 'bundler/gem_tasks'
require 'ember/cli/assets'
require 'rake/testtask'

task :default => [:clean_assets, :update_assets, :test]

Rake::TestTask.new do |t|
  t.libs << 'test'
  t.warning = true
end

desc 'Clean assets'
task :clean_assets do
  `rm vendor/assets/ember/*.js`
end

desc 'Update assets with current version'
task :update_assets do
  `curl -o vendor/assets/ember/loader.js https://raw.githubusercontent.com/ember-cli/loader.js/v#{Ember::CLI::Loader::VERSION}/lib/loader/loader.js`
  `curl -o vendor/assets/ember/resolver.js https://raw.githubusercontent.com/ember-cli/ember-resolver/v#{Ember::CLI::Resolver::VERSION}/dist/ember-resolver.js`
  `curl -o vendor/assets/ember/load-initializers.js https://raw.githubusercontent.com/ember-cli/ember-load-initializers/v#{Ember::CLI::LoadInitializer::VERSION}/ember-load-initializers.js`
end
