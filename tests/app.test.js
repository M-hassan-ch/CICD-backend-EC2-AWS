const request = require("supertest");
const app = require("../app"); // Import the Express app setup only

describe("Express App Endpoints", () => {
  it("should respond with a success message on GET /", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("status", "Success");
    expect(res.body).toHaveProperty("message", "Hello from express server!");
  });

  it("should return health status on GET /health", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "I am healthy");
  });
});
