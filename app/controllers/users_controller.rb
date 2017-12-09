class UsersController < ApplicationController

  before_action :logged_in_user, only: [:show, :destroy]

  def show
    @user = current_user
    @entries = current_user.entries
  end

  def destroy
  end

  private

    def logged_in_user
      unless logged_in?
        redirect_to login_url
      end
    end
end
