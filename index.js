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

class ExportRegistrationPdfExporter {
  generate(data) {
    return data;
  }
};

class Storage {
  store(fileName, path, content) {
    return true;
  }
};

try {
  const exportRegistrationUseCase = new ExportRegistration({
    loadRegistationRepository: new Repository(),
    exportRegistrationPdfExporter: new ExportRegistrationPdfExporter(),
    storage: new Storage()

  });

  console.log(exportRegistrationUseCase.handle({
    cpf: '112', pdfFileName: 'lista-alunos.pdf', path: '/home'
  }));
} catch (error) {
  console.error(error);
}