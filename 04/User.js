export default class User {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
    this.getEmail();
    this.getPassword();
  }
  getEmail = () => {
    const emailRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
    if (emailRegEx.test(this.email)) return this.email;
    else throw new Error("Wrong email");
  };
  getPassword = () => {
    if (this.password.length < 8) throw new Error("To short password");
    else return this.password;
  };

  login = () => {
    const checkDomain = this.email.includes("devmentor.pl");
    return checkDomain ? true : false;
  };
}
