Rails.application.routes.draw do

  root 'users#show'

  get '/login', to: 'users#new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
