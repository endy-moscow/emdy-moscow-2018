var creds = require('./client_id.json');
var GoogleSpreadsheet = require("google-sheets-node-api");
var mySheet = new GoogleSpreadsheet('<1gvJDX_aushf7dKxYeMmiC6JNttflPmTpbCrDsG5Zsw0>');

console.log(mySheet)
mySheet.useServiceAccountAuth(creds).then(mySheet.getInfo.bind(mySheet)).then(function(sheet_info ) {
    console.log( sheet_info.title + ' is loaded' );

    var sheet1 = sheet_info.worksheets[0];

    sheet1.addRow({'Col1': 'Val1', Col2: 'Val2', Col3:'Val3', Col4: 'Val4', Col5: 'Val5', Col6: 'Val6', Col7: 'Val7'})
        .then(sheet1.getRows.bind(sheet1, null))
        .then(function(rows) {
            return [rows, rows[0].del()];
        })
        .spread(function(rows) {
            console.log('Done deleteing');
            rows[1].Col7 = 'new val2';
            return rows[1].save();
        })
        .then(console.log.bind(console, 'Done saving'))
        .catch(function(e) {
            console.error(e);
        });
});
