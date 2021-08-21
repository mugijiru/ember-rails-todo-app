RSpec.configure do |config|
  config.add_setting :committee_options
  config.committee_options = {
    schema_path: Rails.root.join('doc', 'openapi.yml').to_s,
    prefix: '/api/v1',
    parse_response_by_content_type: false,
    query_hash_key: 'rack.request.query_hash'
  }
  config.include Committee::Rails::Test::Methods, type: :request
end
