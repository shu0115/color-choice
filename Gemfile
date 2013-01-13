source 'https://rubygems.org'
ruby '1.9.3'

gem 'rails', '3.2.11'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

# gem 'sqlite3'


# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'

# OmniAuth
gem "omniauth-scaffold"

# Scaffold Template
gem "custom-template"

# Markdown
gem "markdown-scaffold"

# Utility
gem "action_args"

# App Server
gem "thin"

# Pagination
gem "kaminari"

# Settings
gem "rails_config"

# Colorful Logging
gem "rainbow"

# Dubug Tool
gem "tapp"

# Translation
gem "i18n_generators"

# Exception Error Notice
gem "exception_notification"

# Development
group :development do
  gem "twitter-bootstrap-scaffold"
  gem "sextant"
  gem "better_errors"
  gem "binding_of_caller"
  gem "meta_request", "0.2.0"
end

# Test AND Development
group :development, :test do
  gem "sqlite3"
end

# Test
group :test do
  gem "rspec-rails"
end

# Production
group :production do
  gem "pg"
  gem "newrelic_rpm"
end
