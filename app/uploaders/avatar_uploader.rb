class AvatarUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  storage :fog

  def default_url
    'axolotldf.png'
  end

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  version :thumb do
    process :resize_to_fit => [180, 180]
  end

  version :full do 
    process :resize_to_fit => [250,250]
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end
end

#avatar uploader for users, resizes images to thumb and full versions
#stores on aws through fog gem, and in a folder by model name/type
#uses minimagick for resizing
#only allows images in jpg/jpeg gif and png formats
#sets default if none uploaded