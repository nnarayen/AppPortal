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
    get 'interview', to: 'applicants#interview'
    get 'status', to: 'applicants#status'
  end

  namespace :admins do
    get 'overview', to: 'pages#overview'
    get 'breakdown', to: 'pages#breakdown'
    get 'emails', to: 'pages#emails'
    get 'interviews', to: 'pages#interviews'
  end

  namespace :api do
    resources :applicants, only: [:index, :show, :update] do
      post 'submit', to: 'applicants#submit'
      post 'decide', to: 'applicants#decide'
      post 'comment', to: 'applicants#comment'
      post 'schedule', to: 'applicants#schedule'
      post ':category', to: 'applicants#upload'
    end

    resources :emails, only: [] do
      collection do
        get ':category', to: 'emails#fetch'
        put ':category', to: 'emails#update'
        post ':category/send', to: 'emails#send_emails'
      end
    end

    resources :interviews, only: [:index, :create, :update]
  end
end
