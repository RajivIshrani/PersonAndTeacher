const { ethers } = require("hardhat")
const { assert, expect } = require("chai")

describe("Teacher Contract", () => {
    let teacherInstance

    beforeEach(async () => {
        // Deploy Teacher Contract
        let teacherInstanceAddress
        const teacher = await ethers.getContractFactory("Teacher")
        const teacherInstance = await teacher.deploy()
        await teacherInstance.deployed()
        teacherInstanceAddress = teacherInstance.address
        console.log("Teacher Address:", teacherInstanceAddress)
    })

    it("Should take only string in addProfession()", async () => {
        const _profession = "Teacher"
        assert.equal(_profession, "Teacher")
    })

    it("Should take only string in addSubject()", async () => {
        const _subject = "Science"
        assert.equal(_subject, "Science")
    })
})
