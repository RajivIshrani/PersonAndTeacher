// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./Person.sol";

contract Teacher is Person {
    function addProfession(string memory _profession) public {
        profession.push(_profession);
    }

    function addSubject(string memory _subject) public {
        subject.push(_subject);
    }

    function getFavNumber(uint8 _favNum) public override {
        favNumber = _favNum + 5;
    }

    function removeProfession(uint256 _index) public {
        delete profession[_index];
    }

    function removeSubject(uint256 _index) public {
        delete subject[_index];
    }
}
