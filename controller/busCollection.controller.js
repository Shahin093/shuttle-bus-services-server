const { createBusCollectionService, getBusCollectionServiceEmail, getBusCollectionServiceSloting } = require("../services/busCollection.service");


exports.getBusCollection = async (req, res, next) => {
    try {
        const email = req.query.email;
        // console.log(email);
        // const district_from = req.query.district_from;
        // const district_to = req.query.district_to;
        // var datetime = new Date();
        // console.log(datetime);
        // console.log(datetime.toISOString().slice(0, 10));
        // bus collection Data 
        // http://localhost:5000/api/v1/busCollection?district_from=Feni&&district_to=Chittagong 
        const result = await getBusCollectionServiceEmail(email);
        // console.log(result);
        res.status(200).json({
            status: 'Success',
            message: "All Data getting the Bus-Collection.",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Data is not getting",
            error: error.message
        });
        next(error);
    }
}
// getBySignleSlot 
exports.getBySignleSlot = async (req, res, next) => {
    try {
        const slot = req.query.slot;
        const from = req.query.from;
        const to = req.query.to;
        const bus = req.query.bus_name;
        const dates = req.query.dates;
        // const real = dates.slice(0, 10);
        console.log(slot, from, to, bus, dates);
        // const dates = req.query.dates;
        // console.log(slot, bus);
        // var datetime = new Date();
        // const datesss = "2022-12-11T16:30:36.269Z";
        // console.log(datesss.slice(0, 10));
        // console.log(new Date().toISOString().slice(0, 10));
        // bus collection Data 
        // http://localhost:5000/api/v1/busCollection?district_from=Feni&&district_to=Chittagong 
        const result = await getBusCollectionServiceSloting(slot, from, to, bus, dates);
        // console.log(result);
        res.status(200).json({
            status: 'Success',
            message: "Single slot getting the Bus-Collection.",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Data is not getting",
            error: error.message
        });
        next(error);
    }
}
exports.createBusCollection = async (req, res, next) => {
    try {
        //Create
        const result = await createBusCollectionService(req.body);
        // console.log(result);
        res.status(200).json({
            status: 'Success',
            message: "All Data getting the Bus-Collection.",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Data is not getting",
            error: error.message
        });
        next(error);
    }
}