const RegistrationRepository = require("../../../../domain/repositories/registration-repository");
const Registration = require('../../../../domain/entities/registration');
const knex = require('../../../config/knex');
const { NotFoundError } = require("../../../../shared/utils/errors");

module.exports = class KnexRegistrationRepository extends RegistrationRepository {
  constructor() {
    super();
    this.queryBuilder = knex;
  }

  async loadByRegistrationNumber(registrationNumber) {
    const [record] = await this.queryBuilder('registrions').where({ registrationNumber });
    if(!record) throw new NotFoundError(`registration not exist with registrationNumber: ${registrationNumber}`);

    const registration = new Registration(record);
    
    return registration;
  }
};
