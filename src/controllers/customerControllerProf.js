const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM professor', (err, customers) => {
            if (err) {
                res.json(err);
            }
            res.render('customersProf', {
                data: customers
            });
        });
    });
};


controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query(`call addProfessor(${data.Matrícula},'${data.Nome}','${data.ID_Departamento}')`, (err, customer) => {
            res.redirect('/prof');
        })
    })
};

controller.edit = (req,res)=>{
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM professor WHERE Nome = ?', [id], (err, customer) => {
            console.log(customer)
            res.render('./customer_editProf', {
                data: customer[0]
            });
        });
    });
};

controller.update = (req,res)=>{
    const {id} = req.params;
    const newCustomer = req.body;
    req.getConnection((err,conn) =>{
        conn.query('UPDATE professor set ? WHERE (`Nome` = ?)', [newCustomer,id], (err, customer)=>{
            res.redirect('/prof');
        })
    })
}

controller.delete = (req, res) => {
    const { id } = req.params; 
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM professor WHERE (`Nome` = ?)', [id], (err, customer) => {
            res.redirect('/prof');
        })
    })
};

module.exports = controller;