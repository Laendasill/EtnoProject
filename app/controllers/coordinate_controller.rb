class CoordinateController < ApplicationController
  def file
    @coord = File.read("#{Rails.root}/co/mamamap")
    render text: @coord
      
    
  end
end
