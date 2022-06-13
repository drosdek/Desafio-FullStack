//Durante o teste a variavel env sera atribuida to test
process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let Desenvolvedor = require("../models/desenvolvedores");

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe("Desenvolvedores", () => {
  beforeEach((done) => {
    //Apos cada teste limpa o banco de dados
    Desenvolvedor.deleteMany({}, (err) => {
      done();
    });
  });
  /* * Testando a rota "desenvolvedores/GET/" */
  describe("desenvolvedores/GET => [ desenvolvedores ]", () => {
    it("deve obter todos os Desenvolvedores", (done) => {
      chai
        .request(server)
        .get("/desenvolvedores")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  /* * Testando a rota "desenvolvedores/GET/:id" */
  describe("desenvolvedores/GET/:id => { desenvolvedor }", () => {
    it("deve obter o Desenvolvedor pelo id fornecido", (done) => {
      let desenvolvedor = new Desenvolvedor({
        nome: "Joselito JAVA",
        nivel: "629a8a5d9043f473894e704f",
        sexo: "M",
        datanascimento: "1991-04-26",
      });
      desenvolvedor.save((err, desenvolvedor) => {
        chai
          .request(server)
          .get("/desenvolvedores/" + desenvolvedor.id)
          .send(desenvolvedor)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("nivel");
            res.body.should.have.property("nome");
            res.body.should.have.property("sexo");
            res.body.should.have.property("datanascimento");
            res.body.should.have.property("_id").eql(desenvolvedor.id);
            done();
          });
      });
    });
  });

  /* * testando a rota desenvolvedores/POST */
  describe("desenvolvedores/POST => { desenvolvedor }", () => {
    it("não deve ter POST de desenvolvedor sem o campo requirido 'nivel' ", (done) => {
      let desenvolvedor = {
        nome: "Joselito JAVA",
        sexo: "M",
        datanascimento: "1991-04-26",
        hobby: "Acampamento",
      };
      chai
        .request(server)
        .post("/desenvolvedores")
        .send(desenvolvedor)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          res.body.should.have.property("message")
          console.log(res.body);
          done();
        });
    });
    it("deve ter POST de um desenvolvedor", (done) => {
      let desenvolvedor = {
        nivel: "629a8a5d9043f473894e704f",
        nome: "Joselito JAVA",
        sexo: "M",
        datanascimento: "1991-04-26",
        hobby: "Acampamento",
      };
      chai
        .request(server)
        .post("/desenvolvedores")
        .send(desenvolvedor)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          res.body.should.have.property("nivel");
          res.body.should.have.property("nome");
          res.body.should.have.property("sexo");
          res.body.should.have.property("datanascimento");
          res.body.should.have.property("idade");
          done();
        });
    });
  });

  /* * Test the /PUT/:id route */
  describe("/PUT/:id desenvolvedor", () => {
    it("it should UPDATE a desenvolvedor given the id", (done) => {
      let desenvolvedor = new Desenvolvedor({
        nivel: "629a8a5d9043f473894e704f",
        nome: "Joselito Python",
        sexo: "M",
        datanascimento: "1991-04-26",
        hobby: "Acampamento",
      });
      desenvolvedor.save((err, desenvolvedor) => {
        chai
          .request(server)
          .put("/desenvolvedores/" + desenvolvedor.id)
          .send({
            nivel: "629a8a5d9043f473894e704f",
            nome: "Joselito Java",
            sexo: "F",
            datanascimento: "2001-04-26",
            hobby: "Corrida",
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("nome").eql("Joselito Java");
            done();
          });
      });
    });
  });
});
