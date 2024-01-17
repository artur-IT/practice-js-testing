export default class User {
  // class User {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }
  getEmail = () => {
    const emailRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
    if (emailRegEx.test(this.email)) return this.email;
    else throw new Error("Hmmmm");
  };
  getPassword = () => this.password;

  login = () => {
    const checkDomain = this.email.includes("devmentor.pl");
    return checkDomain ? true : false;
  };
}
// const test = new User({ email: "artur@evmentor.pl", password: "23456" });
// console.log(test.login());
