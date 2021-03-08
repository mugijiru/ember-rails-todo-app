# -*- encoding: utf-8 -*-
# stub: ember-cli-assets 0.0.37 ruby lib

Gem::Specification.new do |s|
  s.name = "ember-cli-assets".freeze
  s.version = "0.0.37"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Ryunosuke SATO".freeze]
  s.bindir = "exe".freeze
  s.date = "2017-05-06"
  s.description = "The assets for Ember CLI.".freeze
  s.email = ["tricknotes.rs@gmail.com".freeze]
  s.homepage = "https://github.com/tricknotes/ember-cli-assets".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.3".freeze
  s.summary = "The assets for Ember CLI.".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.8"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_development_dependency(%q<minitest>.freeze, ["~> 5.0"])
    else
      s.add_dependency(%q<bundler>.freeze, ["~> 1.8"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_dependency(%q<minitest>.freeze, ["~> 5.0"])
    end
  else
    s.add_dependency(%q<bundler>.freeze, ["~> 1.8"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<minitest>.freeze, ["~> 5.0"])
  end
end
