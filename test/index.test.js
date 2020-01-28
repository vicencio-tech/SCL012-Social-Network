const functions = require('../src/lib/index.js');

describe("closeSession",() => {
    it ('deberia cerrar sesion',()=>{
        expect(functions.closeSession().tobe('sesion cerrada'));
    });
});

