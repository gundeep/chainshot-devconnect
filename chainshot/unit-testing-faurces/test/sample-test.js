const { expect } = require("chai");
const { ethers } = require("hardhat");

let { provider } = ethers;
let faucet;
let withdrawAmount = ethers.utils.parseUnits("8", "ether");
let withdrawAmountAppropriate = ethers.utils.parseUnits("0.000001", "ether");


describe("Faucet general tests", function () {
  before(() => {
    const Faucet = await ethers.getContractFactory("Faucet");
    const faucet = await Faucet.deploy({
      value: ethers.utils.parseUnits("10", "ether"),
    });
    await faucet.deployed();
  });

  it("deploy the faucet with ether amount", async function () {
    let balance = await provider.getBalance(faucet.address);
    expect(balance).to.equal(ether.utils.parseUnits("10", "ether"));
  });


  it("deploy the faucet with ether amount", async function () {
    let [address1] = await provider.listAccounts();
    console.log(address1);
    expect(await faucet.owner()).to.equal(address1);
  });

  it("should revert if overdraw is attempted", async function () {
    await expect (faucet.withdraw(withdrawAmount)).to.be.reverted;
  });

  it("should not allow double withdraw", async function () {
    let signer5 =await provider.getSigner(5);
    await faucet

  });

  it("should revert if overdraw is attempted", async function () {
    await faucet.destroyFaucet();
    let value = await provider.getCode(faucet.address);
     expect (value).to.equal("0x");
  });
});
