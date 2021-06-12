const ExportRegistration = require("./src/app/use-case/export-registration/export-registration");
const JsJsonAdapter = require("./src/infra/adapters/js-json-adapter");
const LocalStorageAdapter = require("./src/infra/adapters/local-storage-adapter");
const KnexRegistrationRepository = require("./src/infra/repositories/mysql/knex/knex-registration-repository");

async function main() {
  try {
    const exportRegistrationUseCase = new ExportRegistration({
      registationRepository: new KnexRegistrationRepository(),
      exportRegistrationJsonExporter: new JsJsonAdapter(),
      storage: new LocalStorageAdapter(),
    });

    console.log(
      await exportRegistrationUseCase.handle({
        cpf: "111.000.111-00ss",
        pdfFileName: `registration_${new Date().getTime()}`,
        path: "/home/fco/workspacer/js/online-registrations/data",
      })
    );
  } catch (error) {
    console.error(error.stack);
  }
}

main();
