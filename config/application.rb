require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Portal
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    config.time_zone = 'Pacific Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    # Enable React addons
    config.react.addons = true

    # Load all serializers recursively (in subfolders) - screw namespacing
    config.autoload_paths += Dir[Rails.root.join("app", "serializers", "{**}")]

    # Disable for all serializers (except ArraySerializer)
    ActiveModel::Serializer.root = false

    # Disable for ArraySerializer
    ActiveModel::ArraySerializer.root = false

    # Do not swallow errors in after_commit/after_rollback callbacks.
    config.active_record.raise_in_transactional_callbacks = true

    # Mail settings
    config.action_mailer.delivery_method = :smtp
    config.action_mailer.smtp_settings = {
      port: 587,
      address: "smtp.sendgrid.net",
      user_name: ENV["SENDGRID_USER"],
      password: ENV["SENDGRID_PASSWORD"],
      domain: ENV["SENDGRID_DOMAIN"],
      authentication: :plain,
      enable_starttls_auto: true
    }

    # Enable experimental features for Babel
    config.react.jsx_transform_options = {
      stage: 0
    }
  end
end
