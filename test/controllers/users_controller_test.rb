require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  
  test "should redirect show when not logged in" do
    get root_url
    assert_redirected_to login_url
  end
end
