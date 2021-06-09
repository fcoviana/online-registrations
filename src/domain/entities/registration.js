const Email = require('../value-objects/email');
const Cpf = require('../value-objects/cpf');

module.exports = class Registration {
  constructor(data) {
    this.name = data.name;
    this.email = Email.value(data.email);
    this.birthDate = data.birthDate;
    this.registrationNumber = Cpf.value(data.registrationNumber);
    this.registrationAt = data.registrationAt;
  }
};