module.exports = class Cpf {
  static value(cpf) {
    if (!this.validate(cpf)) throw new Error('CPF is not valid');

    return cpf;
  }

  static validate(cpf) {
    if (!cpf) return false;

    return true;
  }
};