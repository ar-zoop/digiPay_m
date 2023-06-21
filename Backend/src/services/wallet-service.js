const { WalletRepository } = require("../repositories"); // Importing the WalletRepository from repositories
const walletRepo = new WalletRepository(); // Creating an instance of the WalletRepository

async function convertResponseData(responseData) {
    // Converts the response data to a specific format
    const convertedData = {
        phoneNumber: responseData[0].dataValues.phoneNumber,
        data: []
    };
    const notesMap = new Map();

    // Iterates over the response data and counts the occurrence of each note value
    for (const currency of responseData) {
        const value = currency.dataValues.value.toString();
        if (notesMap.has(value)) {
            const count = notesMap.get(value) + 1;
            notesMap.set(value, count);
        } else {
            notesMap.set(value, 1);
        }
    }

    // Converts the notes map to an array of objects with value and count properties
    for (const [value, count] of notesMap.entries()) {
        convertedData.data.push({
            value: value,
            numberOfNotes: count
        });
    }

    return convertedData; // Returns the converted data
}

async function getSumOfNotes(convertedData) {
    // Calculates the total sum of all notes based on the converted data
    let totalSum = 0;
    for (const note of convertedData.data) {
        totalSum += parseInt(note.value) * parseInt(note.numberOfNotes);
    }
    return totalSum; // Returns the total sum of notes
}

async function getWallet(id) {
    try {
        const response = await walletRepo.getPhoneNumber(id); // Retrieves the wallet based on the ID
        return response; // Returns the response
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

async function getWalletInfo(id) {
    try {
        const response = await walletRepo.getWalletInfo(Number(id)); // Retrieves the wallet info based on the ID
        const convertedData = await convertResponseData(response); // Converts the response data
        return convertedData; // Returns the converted data
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

async function getWalletBalance(id) {
    try {
        let response = await walletRepo.getWalletInfo(Number(id)); // Retrieves the wallet info based on the ID
        if (response.length == 0) {
            response = undefined;
            return response; // Returns the response (undefined if no wallet found)
        }
        const convertedData = await convertResponseData(response); // Converts the response data
        const totalBalance = await getSumOfNotes(convertedData); // Calculates the total balance
        return totalBalance; // Returns the total balance
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

async function deleteNotes(phoneNumber, data) {
    try {
        let response = undefined;
        for (const note of Object.values(data)) {
            for (let i = 0; i < note.numberOfNotes; i++) {
                try {
                    response = await walletRepo.deleteNotes(phoneNumber, note.value); // Deletes the notes from the wallet
                } catch (error) {
                    console.log(error); // Logging the error
                    throw error; // Throwing the error
                }
            }
        }
        return response; // Returns the response
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

async function getPhoneNumber(id) {
    try {
        const response = await walletRepo.getPhoneNumber(id); // Retrieves the phone number based on the ID
        return response; // Returns the response
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

async function addMoneyToWallet(phoneNumber, data) {
    try {
        let response;
        for (const note of Object.values(data)) {
            for (let i = 0; i < note.numberOfNotes; i++) {
                try {
                    response = await walletRepo.addMoneyToWallet(phoneNumber, note.value); // Adds money to the wallet
                } catch (error) {
                    console.log(error); // Logging the error
                    throw error; // Throwing the error
                }
            }
        }
        return response; // Returns the response
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

async function getAllNotesWithUsers() {
    try {
        const response = await walletRepo.getAllNotesWithUsers(); // Retrieves all notes with associated users
        return response; // Returns the response
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

module.exports = {
    getWallet,
    deleteNotes,
    getPhoneNumber,
    addMoneyToWallet,
    getWalletInfo,
    getWalletBalance,
    getAllNotesWithUsers
}; // Exporting the functions
