# -*- encoding: utf-8 -*-
# stub: barber 0.12.2 ruby lib

Gem::Specification.new do |s|
  s.name = "barber".freeze
  s.version = "0.12.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["tchak".freeze, "twinturbo".freeze]
  s.date = "2019-04-01"
  s.description = "Handlebars precompilation".freeze
  s.email = ["paul@chavard.net".freeze, "me@boardcastingadam.com".freeze]
  s.homepage = "https://github.com/tchak/barber".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.3".freeze
  s.summary = "Handlebars precompilation toolkit".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<execjs>.freeze, [">= 1.2", "< 3"])
      s.add_runtime_dependency(%q<ember-source>.freeze, [">= 1.0", "< 3.1"])
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_development_dependency(%q<handlebars-source>.freeze, ["< 4.2"])
      s.add_development_dependency(%q<simplecov>.freeze, [">= 0"])
      s.add_development_dependency(%q<mocha>.freeze, ["~> 1.0"])
      s.add_development_dependency(%q<minitest>.freeze, ["~> 5.0"])
    else
      s.add_dependency(%q<execjs>.freeze, [">= 1.2", "< 3"])
      s.add_dependency(%q<ember-source>.freeze, [">= 1.0", "< 3.1"])
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<handlebars-source>.freeze, ["< 4.2"])
      s.add_dependency(%q<simplecov>.freeze, [">= 0"])
      s.add_dependency(%q<mocha>.freeze, ["~> 1.0"])
      s.add_dependency(%q<minitest>.freeze, ["~> 5.0"])
    end
  else
    s.add_dependency(%q<execjs>.freeze, [">= 1.2", "< 3"])
    s.add_dependency(%q<ember-source>.freeze, [">= 1.0", "< 3.1"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<handlebars-source>.freeze, ["< 4.2"])
    s.add_dependency(%q<simplecov>.freeze, [">= 0"])
    s.add_dependency(%q<mocha>.freeze, ["~> 1.0"])
    s.add_dependency(%q<minitest>.freeze, ["~> 5.0"])
  end
end
