# Ember ES6 Template

The [tilt][] template for [Ember][Ember.js] specified [ES6][].

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'ember-es6_template'
```

And then execute:

```
$ bundle
```

Or install it yourself as:

```
$ gem install ember-es6_template
```

## Usage

``` ruby
Sprockets.register_engine '.es6', Ember::ES6Template::ES6
# Sprockets.register_engine '.es6', Ember::ES6Template::ES6Module # Alternatively, you can use module tranpilation.
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

[tilt]: https://github.com/rtomayko/tilt
[Ember.js]: http://emberjs.com
[ES6]: https://people.mozilla.org/~jorendorff/es6-draft.html
