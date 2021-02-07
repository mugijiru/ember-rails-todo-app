Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  get 'home/index'

  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
end
