//Durante o teste a variavel env sera atribuida to test
process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let Nivel = require("../models/niveis");

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe("Niveis", () => {
  beforeEach((done) => {
    //Apos cada teste limpa o banco de dados
    Nivel.deleteMany({}, (err) => {
      done();
    });
  });
  /* * Testando a rota "niveis/GET/" */
  describe("niveis/GET => [ niveis ]", () => {
    it("deve obter todos os Niveis", (done) => {
      chai
        .request(server)
        .get("/niveis")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  /* * Testando a rota "niveis/GET/:id" */
  describe("niveis/GET/:id => { nivel }", () => {
    it("deve obter o Nivel pelo id fornecido", (done) => {
      let nivel = new Nivel({
        nome: "Joselito JAVA",
        nivel: "629a8a5d9043f473894e704f",
        sexo: "M",
        datanascimento: "1991-04-26",
      });
      nivel.save((err, nivel) => {
        chai
          .request(server)
          .get("/niveis/" + nivel.id)
          .send(nivel)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("nivel");
            res.body.should.have.property("_id").eql(nivel.id);
            done();
          });
      });
    });
  });

  /* * testando a rota niveis/POST */
  describe("niveis/POST => { nivel }", () => {
    it("não deve ter POST de nivel sem o campo requirido 'nivel' ", (done) => {
      let nivel = {};
      chai
        .request(server)
        .post("/niveis")
        .send(nivel)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          console.log(res.body);
          done();
        });
    });
    it("deve ter POST de um nivel", (done) => {
      let nivel = {
        nivel: "Junior Teste",
      };
      chai
        .request(server)
        .post("/niveis")
        .send(nivel)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          res.body.should.have.property("nivel");
          done();
        });
    });
  });

  /* * Test the /PUT/:id route */
  describe("/PUT/:id nivel", () => {
    it("it should UPDATE a nivel given the id", (done) => {
      let nivel = new Nivel({
        nivel: "Junior Update",
      });
      nivel.save((err, nivel) => {
        chai
          .request(server)
          .put("/niveis/" + nivel.id)
          .send({
            nivel: "Junior Updated",
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("nivel").eql("Junior Updated");
            done();
          });
      });
    });
  });
});
