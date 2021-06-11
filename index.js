const Registration = require("./src/domain/entities/registration");
const ExportRegistration = require("./src/app/use-case/export-registration/export-registration");
const JsJsonAdapter = require("./src/infra/adapters/js-json-adapter");
const LocalStorageAdapter = require("./src/infra/adapters/local-storage-adapter");

class Repository {
  loadByRegistrationNumber(cpf) {
    const registration = new Registration({
      name: "Francisco",
      email: "fco@gmail.com",
      birthDate: "2000-05-19",
      registrationNumber: "111.000.111-00",
      registrationAt: new Date(),
    });

    return registration;
  }
}

async function main() {
  try {
    const exportRegistrationUseCase = new ExportRegistration({
      loadRegistationRepository: new Repository(),
      exportRegistrationJsonExporter: new JsJsonAdapter(),
      storage: new LocalStorageAdapter(),
    });

    console.log(
      await exportRegistrationUseCase.handle({
        cpf: "112",
        pdfFileName: `registration_${new Date().getTime()}`,
        path: "/home/fco/workspacer/js/online-registrations/data",
      })
    );
  } catch (error) {
    console.error(error);
  }
}

main();

