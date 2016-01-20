Rails.application.routes.draw do
  root to: 'pages#home'
  get 'reset', to: 'pages#reset'

  devise_for :applicants, skip: [:sessions, :registrations, :passwords]
  devise_for :admins, skip: [:sessions, :registrations, :passwords]

  devise_scope :applicant do
    post '/sign_up', to: 'registrations#create'
    post '/sign_in', to: 'sessions#create', as: :create_session
    delete '/sign_out', to: 'sessions#destroy', as: :destroy_session
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
    get 'settings', to: 'pages#settings'
  end

  namespace :api do
    resources :passwords, only: [] do
      collection do
        post 'reset', to: 'passwords#reset'
        post 'send_reset', to: 'passwords#send_reset'
      end
    end

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

    resources :interviews, only: [:index, :create, :update, :destroy] do
      collection { delete :index, to: 'interviews#reset' }
    end

    resources :settings, only: [:index, :create] do
      collection do
        post 'advance', to: 'settings#advance'
        delete :index, to: 'settings#reset'
      end
    end
  end
end
