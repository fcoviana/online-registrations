const InputBoundary = require('./input-boundary');
const OutputBoundary = require('./output-boundary');

module.exports = class ExportRegistration {
  constructor({ loadRegistationRepository, exportRegistrationJsonExporter, storage } = {}) {
    this.loadRegistationRepository = loadRegistationRepository;
    this.exportRegistrationJsonExporter = exportRegistrationJsonExporter;
    this.storage = storage;
  }

  async handle(input) {
    const inputBoundary = new InputBoundary(input);
    const { cpf, pdfFileName, path } = inputBoundary;
    const registration = this.loadRegistationRepository.loadByRegistrationNumber(cpf);

    const fileContent = this.exportRegistrationJsonExporter.generate(registration);
    await this.storage.store(pdfFileName, path, fileContent);

    return new OutputBoundary(`${path}/${pdfFileName}.json`);
  }
};