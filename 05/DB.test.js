import DB from "./DB";

// beforeEach(() => {
//   const db = new DB();
//   db.insert({ a: 1, b: 2 }).then(() => db.insert({ a: 3, b: 4 }));
// });

describe("test class function", () => {
  // insert() - wynikiem funkcji musi być typ 'object'!
  test("should by return an 'object' in db object", () => {
    const db = new DB();
    const addToDatabase = db.insert({ a: 1, b: 2 }).then();
    const typeResult = typeof addToDatabase;
    expect(typeResult).toBe("object");
  });

  // select()
  test(".....", () => {
    expect().toBe();
  });

  // remove()
  test(".....", () => {
    expect().toBe();
  });

  // update()
  test(".....", () => {
    expect().toBe();
  });

  // getRows()
  test(".....", () => {
    expect().toBe();
  });
});
