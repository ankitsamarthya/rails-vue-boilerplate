Rails.application.routes.draw do
  scope '/api' do

  end
  match "*path", :to => redirect('/'), via: :all
end
