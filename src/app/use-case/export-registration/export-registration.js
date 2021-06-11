const InputBoundary = require('./input-boundary');
const OutputBoundary = require('./output-boundary');

module.exports = class ExportRegistration {
  constructor({ registationRepository, exportRegistrationJsonExporter, storage } = {}) {
    this.registationRepository = registationRepository;
    this.exportRegistrationJsonExporter = exportRegistrationJsonExporter;
    this.storage = storage;
  }

  async handle(input) {
    const inputBoundary = new InputBoundary(input);
    const { cpf, pdfFileName, path } = inputBoundary;
    const registration = await this.registationRepository.loadByRegistrationNumber(cpf);

    const fileContent = this.exportRegistrationJsonExporter.generate(registration);
    await this.storage.store(pdfFileName, path, fileContent);

    return new OutputBoundary(`${path}/${pdfFileName}.json`);
  }
};