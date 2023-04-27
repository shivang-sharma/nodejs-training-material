const request = require("supertest");
const app = require("./app");

/**
 * Jest test will end when it hits the last line of the test function,
 * so you need to use a done() to make it right.Jest test will end when
 * it hits the last line of the test function, so you need to use a done()
 * to make it right.
 */

//  Use done to notify that it ends
describe("Test the root path", () => {
  test("It should response the GET method", (done) => {
    request(app)
      .post("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

/**
 * Using Promise
 * Two Things to be noticed here:
 *  - That return is crucial, otherwise your tests will get stuck.
 *  - No need to pass done to your test.
 */
describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

/**
 * Async, await way to test
 */

describe("Test the root path", () => {
  test("It should respond to the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

/**
 * Supertest way
 * Supertest way is still available.
 * We just need to return the statement and
 * remember not use .end() and the end.
 */

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app).get("/").expect(200);
  });
});
