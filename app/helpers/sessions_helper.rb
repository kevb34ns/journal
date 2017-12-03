module SessionsHelper

  def log_in(user)
    session[:user_id] = user.id
  end

  def log_out
  end

  def validate_id_token(raw_id_token)
    validator = GoogleIDToken::Validator.new
    id_token = validator.check(raw_id_token, "233361855229-omsegl02h7ggvurbqk4pj0g6drs496js.apps.googleusercontent.com")
  end
end
