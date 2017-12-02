class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def show
    redirect_to login_url
  end

  def create
    # get parsed and validated id token
    id_token = helpers.validate_id_token params[:id_token]
  end
end
