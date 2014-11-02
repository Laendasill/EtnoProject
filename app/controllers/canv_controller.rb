class CanvController < ApplicationController
  def main
    
  end
  
  def create
    @Image = Image.create(image_params)
    #TODO handle base64imagetype
      
    
  end
  
  private 
  
  def image_params
    params.require(:image).permit(:file,:title)
  end
end
