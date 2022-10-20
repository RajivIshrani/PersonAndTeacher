const { ethers } = require("hardhat")

let teacherInstanceAddress
let teacherInstance

async function deploy() {
    const teacher = await ethers.getContractFactory("Teacher")
    teacherInstance = await teacher.deploy()
    await teacherInstance.deployed()
    teacherInstanceAddress = teacherInstance.address
    console.log(teacherInstance)
    console.log("Teacher Address:", teacherInstanceAddress)
}

async function main() {
    await deploy()

    console.log(
        "<------------------Adding Profession------------------------->"
    )
    const _profession = "Teacher"
    const professionTx = await teacherInstance.addProfession(_profession)
    const professionTxRecipt = await professionTx.wait()
    // console.log(tx)
    console.log(professionTxRecipt)
    console.log("Profession is:", _profession)

    console.log("<------------------Adding Subject------------------------->")
    const _subject = "Science"
    const subjectTx = await teacherInstance.addSubject(_subject)
    const subjectTxRecipt = await subjectTx.wait()
    console.log(subjectTxRecipt)
    console.log("Subject is:", _subject)

    console.log(
        "<------------------Adding 5 into Fav Number------------------------->"
    )
    const _favNum = 25
    const favNumTx = await teacherInstance.getFavNumber(_favNum)
    const favNumTxRecipt = await favNumTx.wait()
    console.log(favNumTxRecipt)
    console.log("Fav Num + 5 = ", _favNum)

    console.log(
        "<------------------Remove Profession------------------------->"
    )

    const _index = 0
    const removeProfTx = await teacherInstance.removeProfession(_index)
    const removeProfTxRecipt = await removeProfTx.wait()
    console.log(removeProfTxRecipt)
    console.log("Removed The Profession indexed at:", _index)

    console.log(
        "<------------------Remove Subject------------------------->"
    )

    const _indexSub = 0
    const removeSubjTx = await teacherInstance.removeSubject(_indexSub)
    const removeSubjTxRecipt = await removeSubjTx.wait()
    console.log(removeSubjTxRecipt)
    console.log("Removed The Subject indexed at:", _indexSub)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
