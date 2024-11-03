const request = require("supertest");
const express = require("express");
const app = require("../index"); // Adjust the path if index.js is in a different folder

describe("Express App Endpoints", () => {
  it("should respond with a success message on GET /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("status", "Success");
    expect(res.body).toHaveProperty("message", "Hello from express server");
  });

  it("should return health status on GET /health", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "I am healthy");
  });
});
