Rails.application.routes.draw do
  resources :todo_items, only: :index
  resources :ember_cli_todo_items, only: :index
  devise_for :users, controllers: { sessions: "users/sessions" }
  root 'todo_items#index'

  namespace :api do
    namespace :v1 do
      resources :todo_items, only: %i(index create update destroy)
    end
  end

  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
end
