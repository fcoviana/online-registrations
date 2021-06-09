module.exports = class Email {
  static value(email) {
    if (!email) throw new Error('Email is null');
    if (email.length < 2) throw new Error('Email is not valid');

    return email;
  }
};