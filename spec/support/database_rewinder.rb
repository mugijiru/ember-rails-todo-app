RSpec.configure do |config|
  config.use_transactional_examples = false

  config.before(:suite) do
    DatabaseRewinder.clean_all
  end

  config.before(:each) do
    DatabaseRewinder.clean
  end
end
