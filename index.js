const Registration = require('./src/domain/entities/registration');

try {
  const registration = new Registration({
    name: 'Francisco',
    email: 'fco@gmail.com',
    birthDate: '2000-05-19',
    registrationNumber: '111.000.111-00',
    registrationAt: new Date()
  });

  console.log(registration);
} catch (error) {
  console.error(error);
}