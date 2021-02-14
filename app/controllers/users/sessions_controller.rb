class Users::SessionsController < Devise::SessionsController
  skip_before_action :authenticate_user!
end
