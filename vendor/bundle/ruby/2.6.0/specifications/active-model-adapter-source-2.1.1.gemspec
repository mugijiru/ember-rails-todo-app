# -*- encoding: utf-8 -*-
# stub: active-model-adapter-source 2.1.1 ruby lib

Gem::Specification.new do |s|
  s.name = "active-model-adapter-source".freeze
  s.version = "2.1.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Igor Terzic".freeze, "Yehuda Katz".freeze, "Tom Dale".freeze]
  s.date = "2016-02-18"
  s.description = "ember-data active-model-adapter code wrapper for use with Ruby libs.".freeze
  s.email = ["wycats@gmail.com".freeze]
  s.homepage = "https://github.com/ember-data/active-model-adapter".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.3".freeze
  s.summary = "active-model-adapter source code wrapper.".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<ember-data-source>.freeze, [">= 1.13", "< 3.0"])
    else
      s.add_dependency(%q<ember-data-source>.freeze, [">= 1.13", "< 3.0"])
    end
  else
    s.add_dependency(%q<ember-data-source>.freeze, [">= 1.13", "< 3.0"])
  end
end
