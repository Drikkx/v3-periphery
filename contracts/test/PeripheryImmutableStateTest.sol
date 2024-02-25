// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity 0.8.22;

import '../base/PeripheryImmutableState.sol';

contract PeripheryImmutableStateTest is PeripheryImmutableState {
    constructor(address _factory) PeripheryImmutableState(_factory) {}
}
