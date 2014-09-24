class CanvController < ApplicationController
  def main
    @coord = File.read("#{Rails.root}/co/mamamap")
  end
end
