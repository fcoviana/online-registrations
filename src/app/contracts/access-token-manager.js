module.exports = class AccessTokenManager {
  /*
   * @param {Object} payload
   * @returns {String}
   */
  generate(payload) {
    throw new Error("Not implementd");
  }
  /*
   * @param {Object} accessToken
   * @returns {String}
   */
  decode(accessToken) {
    throw new Error("Not implementd");
  }
};
