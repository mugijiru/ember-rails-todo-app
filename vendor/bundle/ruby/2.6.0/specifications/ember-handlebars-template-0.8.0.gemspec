# -*- encoding: utf-8 -*-
# stub: ember-handlebars-template 0.8.0 ruby lib

Gem::Specification.new do |s|
  s.name = "ember-handlebars-template".freeze
  s.version = "0.8.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Ryunosuke SATO".freeze]
  s.bindir = "exe".freeze
  s.date = "2017-03-24"
  s.description = "The sprockets template for Ember Handlebars.".freeze
  s.email = ["tricknotes.rs@gmail.com".freeze]
  s.homepage = "https://github.com/tricknotes/ember-handlebars-template".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.3".freeze
  s.summary = "The sprockets template for Ember Handlebars.".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<sprockets>.freeze, [">= 3.3", "< 4.1"])
      s.add_runtime_dependency(%q<barber>.freeze, [">= 0.11.0"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.7"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_development_dependency(%q<handlebars-source>.freeze, [">= 0"])
      s.add_development_dependency(%q<minitest>.freeze, [">= 0"])
    else
      s.add_dependency(%q<sprockets>.freeze, [">= 3.3", "< 4.1"])
      s.add_dependency(%q<barber>.freeze, [">= 0.11.0"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.7"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_dependency(%q<handlebars-source>.freeze, [">= 0"])
      s.add_dependency(%q<minitest>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<sprockets>.freeze, [">= 3.3", "< 4.1"])
    s.add_dependency(%q<barber>.freeze, [">= 0.11.0"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.7"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<handlebars-source>.freeze, [">= 0"])
    s.add_dependency(%q<minitest>.freeze, [">= 0"])
  end
end
