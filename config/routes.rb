Rails.application.routes.draw do
  root to: 'pages#home'

  devise_for :applicants, skip: [:sessions, :registrations, :passwords]
  devise_for :admins, skip: [:sessions, :registrations, :passwords]

  devise_scope :applicant do
    post '/sign_up' => 'registrations#create'
    post '/sign_in' => 'sessions#create', :as => :create_session
    delete '/sign_out' => 'sessions#destroy', :as => :destroy_session
  end

  resources :applicants, only: [:show] do
    get 'apply', to: 'applicants#apply'
  end

  namespace :api do
    resources :applicants, only: [:show, :update] do
      get 'responses', to: 'applicants#fetch'
      post 'responses', to: 'applicants#save'
    end
  end
end
