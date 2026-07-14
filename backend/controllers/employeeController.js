exports.getEmployee = async (req, res) => {

    try {

        const employee = await Employee.findOne();

        console.log(employee);

        res.json(employee);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};