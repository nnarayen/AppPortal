module Admins
  class PagesController < ApplicationController
    before_action :authenticate_admin!

    def interviews
      @capacity = Interview.capacity
    end
  end
end
