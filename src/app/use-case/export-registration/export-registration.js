const InputBoundary = require('./input-boundary');
const OutputBoundary = require('./output-boundary');

module.exports = class ExportRegistration {
  constructor({ loadRegistationRepository } = {}) {
    this.loadRegistationRepository = loadRegistationRepository;
  }
  handle(input) {
    const inputBoundary = new InputBoundary(input);
    const cpf = inputBoundary;
    const registration = this.loadRegistationRepository.loadByRegistrationNumber(cpf);

    return new OutputBoundary(registration);
  }
};