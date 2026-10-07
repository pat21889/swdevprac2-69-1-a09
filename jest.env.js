const { TestEnvironment } = require('jest-environment-jsdom')

class JsdomWithFetch extends TestEnvironment {
  async setup() {
    await super.setup()
    this.global.fetch = fetch
    this.global.Headers = Headers
    this.global.Request = Request
    this.global.Response = Response
  }
}

module.exports = JsdomWithFetch
