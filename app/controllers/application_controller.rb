class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
  	devise_parameter_sanitizer.permit(:sign_up,
  		keys: [:first_name, :last_name, :driver_license, :license_pic, :address, :phone, :birthday])
    devise_parameter_sanitizer.permit(:account_update,
  		keys: [:first_name, :last_name, :driver_license, :license_pic, :address, :phone, :birthday])
  
  end

  def admin_only
  	unless current_user.nil? || current_user.role != "admin"
  		flash[:access_denied] = "Access denied. You must be an admin to see this page."
  		redirect_to '/accounts/show'
  	end
  end

end
