export const createCarServiceMock = {
    bodyData: {
        name: "Phantom",
        description: null,
        brand: "Rolls-Royce",
        year: 2019,
        km: 14999
    },
    expectedValue: {
        id: expect.any(String),
        name: "Phantom",
        description: null,
        brand: "Rolls-Royce",
        year: 2019,
        km: 14999
    }
}

export const updateCarServiceMock = {
    bodyData: {
        description: "Surely is among the most iconic super cars ever created.",
        km: 15000
    },
    expectedValue: {
        id: expect.any(String),
        name: "Phantom",
        description: "Surely is among the most iconic super cars ever created.",
        brand: "Rolls-Royce",
        year: 2019,
        km: 15000
    }
}