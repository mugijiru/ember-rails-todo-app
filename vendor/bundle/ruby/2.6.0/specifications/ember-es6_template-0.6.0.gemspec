# -*- encoding: utf-8 -*-
# stub: ember-es6_template 0.6.0 ruby lib

Gem::Specification.new do |s|
  s.name = "ember-es6_template".freeze
  s.version = "0.6.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Ryunosuke SATO".freeze]
  s.bindir = "exe".freeze
  s.date = "2017-03-24"
  s.description = "The tilt template for Ember specified ES6.".freeze
  s.email = ["tricknotes.rs@gmail.com".freeze]
  s.homepage = "https://github.com/tricknotes/ember-es6_template".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.3".freeze
  s.summary = "The tilt template for Ember specified ES6.".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<babel-transpiler>.freeze, [">= 0.6.0", "< 0.8"])
      s.add_runtime_dependency(%q<sprockets>.freeze, [">= 2.2", "< 4.1"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.7"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_development_dependency(%q<minitest>.freeze, ["~> 5.0"])
      s.add_development_dependency(%q<minitest-power_assert>.freeze, [">= 0"])
      s.add_development_dependency(%q<coffee-script>.freeze, ["~> 2.3"])
    else
      s.add_dependency(%q<babel-transpiler>.freeze, [">= 0.6.0", "< 0.8"])
      s.add_dependency(%q<sprockets>.freeze, [">= 2.2", "< 4.1"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.7"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_dependency(%q<minitest>.freeze, ["~> 5.0"])
      s.add_dependency(%q<minitest-power_assert>.freeze, [">= 0"])
      s.add_dependency(%q<coffee-script>.freeze, ["~> 2.3"])
    end
  else
    s.add_dependency(%q<babel-transpiler>.freeze, [">= 0.6.0", "< 0.8"])
    s.add_dependency(%q<sprockets>.freeze, [">= 2.2", "< 4.1"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.7"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<minitest>.freeze, ["~> 5.0"])
    s.add_dependency(%q<minitest-power_assert>.freeze, [">= 0"])
    s.add_dependency(%q<coffee-script>.freeze, ["~> 2.3"])
  end
end
