class Image < ActiveRecord::Base
  has_many :functions
  mount_uploader :image, ImageUploader
end
