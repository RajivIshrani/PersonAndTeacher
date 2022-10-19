// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Person {
    uint8 public favNumber;
    uint8[] public age;
    string[] public name;
    string[] public profession;
    string[] public subject;

    function getFavNumber(uint8 _favNum) public virtual {
        favNumber = _favNum;
    }

    function addName(string memory _name) public {
        name.push(_name);
    }

    function addAge(uint8 _age) public {
        age.push(_age);
    }

    function removeName(uint256 _index) public virtual {
        delete name[_index];
    }

    function removeAge(uint256 _index) public {
        delete age[_index];
    }
}
