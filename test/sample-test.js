const { expect } = require("chai");
const { parseEther } = require("ethers/lib/utils");
const { ethers } = require("hardhat");

describe("Token Contract", function () {
  it("Should return the new transactions once it's changed", async function () {

    const [owner] = await ethers.getSigners();

    const testTransactions = await ethers.deployContract("Transactions");
    
    await testTransactions.addToBlockchain("0x6a609aa1880c62B9cd803746118F33D7b0977cfF", parseEther("0.01"), "hello", "hi!" );
    const countedTransactions = await testTransactions.getTransactionCount();
    const getAllTransactions = await testTransactions.getAllTransactions();

    console.log(countedTransactions);
    console.log(getAllTransactions);


  });
});