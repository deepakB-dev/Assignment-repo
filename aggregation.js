db.sales.aggregate([
    {
        $unwind: "$items" // Flatten the items list
    },
    {
        $group: {
            _id: {
                store: "$store",
                month: { $dateToString: { format: "%Y-%m", date: "$date" } }
            },
            totalRevenue: { 
                $sum: { $multiply: ["$items.quantity", "$items.price"] } 
            },
            totalItemsSold: { $sum: "$items.quantity" },
            totalPrice: { $sum: "$items.price" }
        }
    },
    {
        $project: {
            _id: 0,
            store: "$_id.store",
            month: "$_id.month",
            totalRevenue: 1,
            averagePrice: { $divide: ["$totalPrice", "$totalItemsSold"] }
        }
    },
    {
        $sort: { store: 1, month: 1 } 
    }
]);
