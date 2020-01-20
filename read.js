var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = "SELECT * FROM customers";
    db.query(sql, function (err, result) {
        if (err) throw err;
        // gunakan perulangan untuk menampilkan data
        console.log(`ID \t NAMA \t\t ALAMAT`);
        console.log(`----------------------------------------------------------`);
        result.forEach(customer => {
            console.log(`${customer.id} \t ${customer.nama} \t ${customer.alamat}`);
        });
    });
});