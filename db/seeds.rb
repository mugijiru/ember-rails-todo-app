filepath = Rails.root.join('db', 'seeds', "#{Rails.env.downcase}.rb")
load(filepath) if File.exist?(filepath)
