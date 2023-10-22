const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.render('orders');
    })
    .post((req, res) => {
        const { checkIn, checkOut } = req.body;

        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        if (!isNaN(checkInDate) && !isNaN(checkOutDate)) {
            const timeDifference = checkOutDate - checkInDate;
            const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

            res.render('orders', { daysDifference }); 
            console.log(daysDifference);
        } else {
            res.status(400).json({ error: 'Invalid date input' });
        }
    });

module.exports = router;
