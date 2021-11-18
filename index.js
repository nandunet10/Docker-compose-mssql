const sql = require('mssql')

const  config = {
    user: 'sa',
    password: 'r00t.R00T',
    server:'localhost',
    database:'Ef_Estudo',
    options:{
        enableArithAbort: true
    }
}

const run = async() =>{
    try{
        console.log('Connection Opering...');
        const pool = await sql.connect(config);
        const { recordset } = await sql.query `select * from users;`;

        console.log(recordset); 

    }catch(err){
        console.log(err);
    }finally{
        await pool.close();
        console.log('Connection Closed');
    }
}

run();