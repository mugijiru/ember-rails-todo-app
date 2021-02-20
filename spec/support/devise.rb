RSpec.configure do |config|
  config.include Devise::Test::IntegrationHelpers, type: :request
  config.include Warden::Test::Helpers, type: :system
  config.include Warden::Test::Helpers, type: :routing

  config.after(:each) do
    Warden.test_reset!
  end
end
