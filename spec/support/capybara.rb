if ENV['CI'] == 'true'
  Capybara.register_driver :selenium_chrome_headless do |app|
    browser_options = ::Selenium::WebDriver::Chrome::Options.new
    browser_options.args << '--headless'
    browser_options.args << '--disable-gpu'
    Capybara::Selenium::Driver.new(app, browser: :chrome, options: browser_options)
  end

  Capybara.javascript_driver = :selenium_chrome_headless
  RSpec.configure do |config|
    config.before(:each, type: :system) do
      driven_by :selenium_chrome_headless
    end
  end
else
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
end
