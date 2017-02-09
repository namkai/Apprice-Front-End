"use strict";

process.env.NODE_ENV = "development";

const { suite, test } = require("mocha");
const request = require("supertest");
const knex = require("../knex");
const app = require("../app");


describe ("log in routes", () => {
  // before((done) => {
  //   knex.migrate.latest()
  //     .then(() => {
  //       done();
  //     })
  //     .catch((err) => {
  //       done(err);
  //     });
  // });
  //
  // beforeEach((done) => {
  //   knex.seed.run()
  //     .then(() => {
  //       done();
  //     })
  //     .catch((err) => {
  //       done(err);
  //     });
  // });
  //
  // test("GET /api/users", (done) => {
  //   request(app)
  //     .get("/api/users")
  //     .set("Accept", "application/json")
  //     .expect("Content-Type", /json/)
  //     .expect((res) => {
  //       delete res.body.created_at;
  //       delete res.body.updated_at;
  //     })
  //     .expect(200, [{
  //       id: 1,
  //       first_name: "Ellie",
  //       last_name: "Howard",
  //       email: "ellie@gmail.com",
  //     }, {
  //       id: 2,
  //       first_name: "Victor",
  //       last_name: "Constantino",
  //       email: "vhc@gmail.com",
  //     }], done);
  // });


  it ("POST /api/users/register", (done) => {
    request(app)
      .post("/api/users/register")
      .set("Accept", "application/json")
      .send({
        first_name: "Ellie",
        last_name: "Howard",
        email: "ellie@gmail.com",
        password: 'meow'
      })
      .expect("Content-Type", /json/)
      .expect((res) => {
        delete res.body.created_at;
        delete res.body.updated_at;
      })
      .expect(200, [{
        first_name: "Ellie",
        last_name: "Howard",
        email: "ellie@gmail.com",
      }], done);
  });


  it ("POST /api/users/login", (done) => {
    request(app)
      .post("/api/users/login")
      .set("Accept", "application/json")
      .send({
        email: "ellie@gmail.com",
        password: 'meow'
      })
      .expect("Content-Type", /json/)
      .expect((res) => {
        delete res.body.created_at;
        delete res.body.updated_at;
      })
      .expect(200, [{
        id: 1,
        first_name: "Ellie",
        last_name: "Howard",
        email: "ellie@gmail.com",
      }], done);
  });


  it ("PATCH /api/users/:id", (done) => {
    request(app)
      .patch("/api/users/2")
      .set("Accept", "application/json")
      .send({
        first_name: "Eleanor"
      })
      .expect("Content-Type", /json/)
      .expect((res) => {
        delete res.body.created_at;
        delete res.body.updated_at;
      })
      .expect(200, {
        id: 1,
        first_name: "Eleanor"
      }, done);
  });


  it ("DELETE /api/users/:id", (done) => {
    request(app)
      .del("/api/users/2")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect((res) => {
        delete res.body.created_at;
        delete res.body.updated_at;
      })
      .expect(200, {
        first_name: "Eleanor",
        last_name: "Howard",
        email: "ellie@gmail.com"
      }, done);
  });
});
