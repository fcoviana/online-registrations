const ExportRegistration = require("../../app/use-case/export-registration/export-registration");
const KnexRegistrationRepository = require("../../infra/repositories/mysql/knex/knex-registration-repository");
const JsJsonAdapter = require("../../infra/adapters/js-json-adapter");
const LocalStorageAdapter = require("../../infra/adapters/local-storage-adapter");
const ExportRegistrationController = require('../../interface/controllers/export-registration-controller');

module.exports = class ExportRegistrationRouterComposer {
  static compose() {
    const exportRegistrationUseCase = new ExportRegistration({
      registationRepository: new KnexRegistrationRepository(),
      exportRegistrationJsonExporter: new JsJsonAdapter(),
      storage: new LocalStorageAdapter(),
    });

    return new ExportRegistrationController(exportRegistrationUseCase);
  }
};
