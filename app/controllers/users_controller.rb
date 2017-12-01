class UsersController < ApplicationController
  def new
  end

  def show
    redirect_to login_url
  end
end
