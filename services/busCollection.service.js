const BusCollection = require("../model/busCollection")

// email by getting 
exports.getBusCollectionServiceEmail = async (email) => {
    const busCollection = await BusCollection.find({ email: email });
    return busCollection;
};

// single slot count 
exports.getBusCollectionServiceSloting = async (slot, from, to, bus, dates) => {
    // const realTIme = dates.slice(0, 10);
    // console.log(bus, from, to, dates);

    // http://localhost:5000/api/v1/busCollection/slots?bus_name=CDM&&slot=10:00AM
    const busCollection = await BusCollection.find({
        slot: slot, district_from: from, district_to: to, bus_name: bus, dates: dates
    });
    return busCollection;
};


exports.createBusCollectionService = async (data) => {
    const busColletionService = await BusCollection.create(data);
    return busColletionService;
};

