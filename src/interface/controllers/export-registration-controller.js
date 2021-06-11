module.exports = class ExportRegistrationController {
  constructor(exportRegistrationUseCase) {
    this.exportRegistrationUseCase = exportRegistrationUseCase;
  }

  async handle(cpf) {
    const fullFileName = await this.exportRegistrationUseCase.handle({
      cpf,
      pdfFileName: `registration_${new Date().getTime()}`,
      path: "/home/fco/workspacer/js/online-registrations/data",
    });

    return fullFileName;
  }
};
