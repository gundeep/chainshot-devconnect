require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    optimisticKovan: {
      url: "https://opt-kovan.g.alchemy.com/v2/Fr27x6yhyZWdjGjUux2dhZt3aUvT2T2a",
      accounts: ["0xfd0bb46d2f5c518def821f9a99f9a9709b3682bac38a6b617dfa9161c449ce74"]
    },
  },
};
