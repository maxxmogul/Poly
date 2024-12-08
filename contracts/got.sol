// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

/// @title Game of Thrones House Contract
/// @dev A contract to manage a "house" string variable with ownership control
contract Got {
    /// @notice The name of the house
    string private house;

    /// @notice The address of the contract owner
    address private owner;

    /// @notice Emitted when the house name is updated
    /// @param previousHouse The previous house name
    /// @param newHouse The updated house name
    event HouseUpdated(string previousHouse, string newHouse);

    /// @notice Emitted when the contract is deployed
    /// @param house The initial house name
    event HouseCreated(string house);

    /// @dev Initializes the contract with a house name and sets the owner
    /// @param _house The initial name of the house
    constructor(string memory _house) {
        house = bytes(_house).length > 0 ? _house : "Default House";
        owner = msg.sender;
        emit HouseCreated(house);
    }

    /// @notice Sets the house name
    /// @param _house The new name of the house
    function setHouse(string memory _house) external onlyOwner {
        string memory previousHouse = house;
        house = _house;
        emit HouseUpdated(previousHouse, _house);
    }

    /// @notice Gets the current house name
    /// @return The name of the house
    function getHouse() external view returns (string memory) {
        return house;
    }

    /// @dev Restricts access to the contract owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }
}
