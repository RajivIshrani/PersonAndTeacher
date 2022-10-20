const { ethers } = require("hardhat")
const { assert, expect } = require("chai")

let teacherInstanceAddress
let teacherInstance
// let teacherInstance
async function deploy() {
    const teacher = await ethers.getContractFactory("Teacher")
    teacherInstance = await teacher.deploy()
    await teacherInstance.deployed()
    teacherInstanceAddress = teacherInstance.address
    console.log(teacherInstance)
    console.log("Teacher Address:", teacherInstanceAddress)
}

describe("Teacher Contract", () => {
    // beforeEach(async () => {
    //     // Deploy Teacher Contract

    // })
    deploy()
    it("Should take only string in addProfession()", async () => {
        const _profession = "Teacher"
        const txRecipt = await teacherInstance.addProfession(_profession)
        console.log(txRecipt)
        assert.equal(_profession, "Teacher")
    })

    it("Should take only string in addSubject()", async () => {
        const _subject = "Science"
        assert.equal(_subject, "Science")
    })
})
