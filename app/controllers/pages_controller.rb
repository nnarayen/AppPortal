class PagesController < ApplicationController
  before_action :redirect_user, only: [:home]

  def reset
    @token = params[:token]
  end

  private

  def redirect_user
    redirect_to redirect_user_path(current_user) if current_user
  end
end
