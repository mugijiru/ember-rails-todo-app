# -*- encoding: utf-8 -*-
# stub: ember-data-source 2.18.3 ruby lib

Gem::Specification.new do |s|
  s.name = "ember-data-source".freeze
  s.version = "2.18.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Yehuda Katz".freeze]
  s.date = "2018-07-06"
  s.description = "ember-data source code wrapper for use with Ruby libs.".freeze
  s.email = ["wycats@gmail.com".freeze]
  s.homepage = "https://github.com/emberjs/data".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.3".freeze
  s.summary = "ember-data source code wrapper.".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<ember-source>.freeze, [">= 2", "< 3.0"])
    else
      s.add_dependency(%q<ember-source>.freeze, [">= 2", "< 3.0"])
    end
  else
    s.add_dependency(%q<ember-source>.freeze, [">= 2", "< 3.0"])
  end
end
