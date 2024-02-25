// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

import '../SwapRouter.sol';

contract MockTimeSwapRouter is SwapRouter {
    uint256 time;

    constructor(address _factory, address _WETH9) SwapRouter(_factory) {}

    function _blockTimestamp() internal view override returns (uint256) {
        return time;
    }

    function setTime(uint256 _time) external {
        time = _time;
    }
}
