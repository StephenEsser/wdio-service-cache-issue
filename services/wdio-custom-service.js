class CustomLauncherService {
  constructor(options) {
    this.locale = options.locale;

    console.log(`DEBUG [CustomLauncherService] - Constructor - Locale ${options.locale}`);
  }

  onPrepare(config, capabilities) {
    console.log(`DEBUG [CustomLauncherService] - onPrepare - Locale ${this.options.locale}`);
  }
}

module.exports = CustomLauncherService;