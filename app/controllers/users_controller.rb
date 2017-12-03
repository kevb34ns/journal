class UsersController < ApplicationController

  def show
    if logged_in?
      @user = current_user
    else
      redirect_to login_url
    end
  end

  def destroy
  end
end
