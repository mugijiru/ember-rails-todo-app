RSpec.configure do |config|
  config.before(:each, type: :system) do
    driven_by :selenium, options: {
      browser: :remote,
      url: ENV.fetch('SELENIUM_REMOTE_URL'),
      desired_capabilities: :chrome
    }
    Capybara.server_host = IPSocket.getaddress(Socket.gethostname)
    Capybara.server_port = 3000
    Capybara.app_host = "http://#{Capybara.server_host}:#{Capybara.server_port}"
  end
end
