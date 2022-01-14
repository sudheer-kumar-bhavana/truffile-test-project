//SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Employees {

    mapping (uint => Employee) employees;
    uint employeesCount;

    struct Employee {
        uint id;
        string name;
        uint age;
        uint salary;
    }

    function setDetails(string memory _name, uint _age, uint _salary) external {
        employees[employeesCount] = Employee(employeesCount, _name, _age, _salary);
        employeesCount++;
    }

    function getDetails(uint _id) view public returns (string memory, uint, uint){
        string memory name = employees[_id].name;
        uint age = employees[_id].age;
        uint salary = employees[_id].salary;
        return (name, age, salary);
    }
}
