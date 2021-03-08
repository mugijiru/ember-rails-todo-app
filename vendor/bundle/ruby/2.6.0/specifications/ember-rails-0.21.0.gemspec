# -*- encoding: utf-8 -*-
# stub: ember-rails 0.21.0 ruby lib

Gem::Specification.new do |s|
  s.name = "ember-rails".freeze
  s.version = "0.21.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Keith Pitt".freeze, "Rob Monie".freeze, "Joao Carlos".freeze, "Paul Chavard".freeze]
  s.date = "2017-03-25"
  s.email = ["me@keithpitt.com".freeze, "paul@chavard.net".freeze]
  s.homepage = "https://github.com/emberjs/ember-rails".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.3".freeze
  s.summary = "Ember for Rails 3.1+".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<railties>.freeze, [">= 4.2"])
      s.add_runtime_dependency(%q<active_model_serializers>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<jquery-rails>.freeze, [">= 1.0.17"])
      s.add_runtime_dependency(%q<ember-source>.freeze, [">= 1.8.0"])
      s.add_runtime_dependency(%q<ember-data-source>.freeze, [">= 1.13.0"])
      s.add_runtime_dependency(%q<active-model-adapter-source>.freeze, [">= 1.13.0"])
      s.add_runtime_dependency(%q<ember-handlebars-template>.freeze, [">= 0.1.1", "< 1.0"])
      s.add_runtime_dependency(%q<ember-es6_template>.freeze, [">= 0.4.0", "< 0.7"])
      s.add_runtime_dependency(%q<ember-cli-assets>.freeze, ["~> 0.0.1"])
      s.add_development_dependency(%q<bundler>.freeze, [">= 1.2.2"])
      s.add_development_dependency(%q<tzinfo>.freeze, [">= 0"])
      s.add_development_dependency(%q<vcr>.freeze, [">= 0"])
      s.add_development_dependency(%q<webmock>.freeze, [">= 0"])
      s.add_development_dependency(%q<sprockets-rails>.freeze, [">= 0"])
      s.add_development_dependency(%q<handlebars-source>.freeze, ["> 1.0.0", "< 3"])
      s.add_development_dependency(%q<test-unit>.freeze, [">= 0"])
      s.add_development_dependency(%q<safe_yaml>.freeze, [">= 1.0.4"])
    else
      s.add_dependency(%q<railties>.freeze, [">= 4.2"])
      s.add_dependency(%q<active_model_serializers>.freeze, [">= 0"])
      s.add_dependency(%q<jquery-rails>.freeze, [">= 1.0.17"])
      s.add_dependency(%q<ember-source>.freeze, [">= 1.8.0"])
      s.add_dependency(%q<ember-data-source>.freeze, [">= 1.13.0"])
      s.add_dependency(%q<active-model-adapter-source>.freeze, [">= 1.13.0"])
      s.add_dependency(%q<ember-handlebars-template>.freeze, [">= 0.1.1", "< 1.0"])
      s.add_dependency(%q<ember-es6_template>.freeze, [">= 0.4.0", "< 0.7"])
      s.add_dependency(%q<ember-cli-assets>.freeze, ["~> 0.0.1"])
      s.add_dependency(%q<bundler>.freeze, [">= 1.2.2"])
      s.add_dependency(%q<tzinfo>.freeze, [">= 0"])
      s.add_dependency(%q<vcr>.freeze, [">= 0"])
      s.add_dependency(%q<webmock>.freeze, [">= 0"])
      s.add_dependency(%q<sprockets-rails>.freeze, [">= 0"])
      s.add_dependency(%q<handlebars-source>.freeze, ["> 1.0.0", "< 3"])
      s.add_dependency(%q<test-unit>.freeze, [">= 0"])
      s.add_dependency(%q<safe_yaml>.freeze, [">= 1.0.4"])
    end
  else
    s.add_dependency(%q<railties>.freeze, [">= 4.2"])
    s.add_dependency(%q<active_model_serializers>.freeze, [">= 0"])
    s.add_dependency(%q<jquery-rails>.freeze, [">= 1.0.17"])
    s.add_dependency(%q<ember-source>.freeze, [">= 1.8.0"])
    s.add_dependency(%q<ember-data-source>.freeze, [">= 1.13.0"])
    s.add_dependency(%q<active-model-adapter-source>.freeze, [">= 1.13.0"])
    s.add_dependency(%q<ember-handlebars-template>.freeze, [">= 0.1.1", "< 1.0"])
    s.add_dependency(%q<ember-es6_template>.freeze, [">= 0.4.0", "< 0.7"])
    s.add_dependency(%q<ember-cli-assets>.freeze, ["~> 0.0.1"])
    s.add_dependency(%q<bundler>.freeze, [">= 1.2.2"])
    s.add_dependency(%q<tzinfo>.freeze, [">= 0"])
    s.add_dependency(%q<vcr>.freeze, [">= 0"])
    s.add_dependency(%q<webmock>.freeze, [">= 0"])
    s.add_dependency(%q<sprockets-rails>.freeze, [">= 0"])
    s.add_dependency(%q<handlebars-source>.freeze, ["> 1.0.0", "< 3"])
    s.add_dependency(%q<test-unit>.freeze, [">= 0"])
    s.add_dependency(%q<safe_yaml>.freeze, [">= 1.0.4"])
  end
end
