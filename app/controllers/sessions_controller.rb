class SessionsController < ApplicationController

  def new
    @user = User.new
  end

  # Login
  def create
    # get parsed and validated id token
    id_token = validate_id_token params[:id_token]
    if !id_token.nil?
      @user = User.find_by sub: id_token['sub']
      if @user.nil?
        # Create new user
        @user = User.new sub: id_token['sub'], 
                         given_name: id_token['given_name'], 
                         family_name: id_token['family_name']
        unless @user.save
          # could not create user
          render 'new'
          return
        end
      end
      # Log in
      log_in @user
      redirect_to @user
    end
  end

  # Logout
  def destroy
  end
end
