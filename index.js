const Registration = require('./src/domain/entities/registration');
const ExportRegistration = require('./src/app/use-case/export-registration/export-registration');


class Repository {
  loadByRegistrationNumber(cpf) {
    const registration = new Registration({
      name: 'Francisco',
      email: 'fco@gmail.com',
      birthDate: '2000-05-19',
      registrationNumber: '111.000.111-00',
      registrationAt: new Date()
    });

    return registration;
  }
}

try {
  const exportRegistrationUseCase = new ExportRegistration({
    loadRegistationRepository: new Repository()
  });

  console.log(exportRegistrationUseCase.handle('112'));
} catch (error) {
  console.error(error);
}