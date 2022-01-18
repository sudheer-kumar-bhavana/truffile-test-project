const BN = require('bn.js');
const Employees = artifacts.require('Employees');

require('chai')
    .use(require('chai-bn')(BN))
    .should();

contract('Employees', accounts => {

    const _name = "SUDH";
    const _age = 30;
    const _sal = 10000; 


    beforeEach(async function(){
        this.employees = await Employees.new(); 
    });

    describe('Add employee and fetch added employee', function(){
        it('Add employee', async function(){
            const response = await this.employees.setDetails(_name, _age, _sal);
            //console.log(JSON.stringify(response));
            const details = await this.employees.getDetails(0);
            //console.log(details);
            //console.log(JSON.stringify(details));
            details['0'].should.equal(_name);
            details['1'].should.be.a.bignumber.that.equals(new BN('30'));
            details['2'].should.be.a.bignumber.that.equals(new BN('10000'));
        });

    });

});