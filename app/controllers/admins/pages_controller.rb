module Admins
  class PagesController < ApplicationController
    before_action :authenticate_admin!
  end
end
