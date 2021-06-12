const ControllerErros = require("./controller-erros");
const HttpResponse = require("../helppers/http-response");

module.exports = class ExportRegistrationController {
  constructor(exportRegistrationUseCase) {
    this.exportRegistrationUseCase = exportRegistrationUseCase;
  }

  async handle(httpRequest) {
    try {
      const { cpf } = httpRequest.params;
      const fullFileName = await this.exportRegistrationUseCase.handle({
        cpf,
        jsonFileName: `registration_${new Date().getTime()}`,
      });

      return HttpResponse.ok({ fullFileName });
    } catch (error) {
      return ControllerErros.handle(error);
    }
  }
};
