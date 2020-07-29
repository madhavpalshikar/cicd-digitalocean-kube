const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

describe("Service..", ()=>{
    describe("GET /", ()=>{
        it("Service should be working", (done)=>{
            chai.request(app)
                .get('/')
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                })
        })
    })

    describe("GET /top5movies", ()=>{
        it("Should return Top 5 Movies", (done)=>{
            chai.request(app)
                .get('/top5movies')
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                })
        })
    })
})