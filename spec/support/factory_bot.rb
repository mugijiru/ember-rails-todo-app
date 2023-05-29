RSpec.configure do |config|
  config.include FactoryBot::Syntax::Methods

  config.before do
    FactoryBot.rewind_sequences
  end
end
