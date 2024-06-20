const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("HBTokenModule", (m) => {
  const HBToken = m.contract("HBToken", [
    "0x5978D1118621b9B56Dc0B5BBd27518Dcf8697c2b" // Replace with the initial owner's address
  ]);

  return { HBToken };
});
