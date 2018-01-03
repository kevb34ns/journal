Rails.application.routes.draw do

  root 'users#show'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/react', to: 'pages#home'
  get '/react/login', to: 'pages#home'

  resources :users, only: [:show, :destroy]
  resources :entries, only: [:index, :create, :update, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
