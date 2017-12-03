module SessionsHelper

  def log_in(user)
    session[:user_id] = user.id
  end

  def log_out
    session.delete :user_id
    @current_user = nil
  end

  def current_user
    if user_id = session[:user_id]
      @current_user = User.find(session[:user_id])
    end
  end

  def logged_in?
    !current_user.nil?
  end

  def validate_id_token(raw_id_token)
    validator = GoogleIDToken::Validator.new
    id_token = validator.check(raw_id_token, "233361855229-omsegl02h7ggvurbqk4pj0g6drs496js.apps.googleusercontent.com")
  end
end
