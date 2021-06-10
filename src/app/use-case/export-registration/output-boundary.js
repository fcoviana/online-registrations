module.exports = class OutputBoundary {
  constructor(data) {
    this.name = data['name'] ?? '';
    this.email = data['email'] ?? '';
    this.birthDate = data['birthDate'] ?? '';
    this.registrationNumber = data['registrationNumber'] ?? '';
    this.registrationAt = data['registrationAt'] ?? '';
  }
};