const InputBoundary = require('./input-boundary');
const OutputBoundary = require('./output-boundary');

module.exports = class ExportRegistration {
  constructor({ loadRegistationRepository, exportRegistrationPdfExporter, storage } = {}) {
    this.loadRegistationRepository = loadRegistationRepository;
    this.exportRegistrationPdfExporter = exportRegistrationPdfExporter;
    this.storage = storage;
  }

  handle(input) {
    const inputBoundary = new InputBoundary(input);
    const { cpf, pdfFileName, path } = inputBoundary;
    const registration = this.loadRegistationRepository.loadByRegistrationNumber(cpf);

    const fileContent = this.exportRegistrationPdfExporter.generate(registration);
    this.storage.store(pdfFileName, path, fileContent);

    return new OutputBoundary(`${path}/${pdfFileName}`);
  }
};