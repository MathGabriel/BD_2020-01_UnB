const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM departamento', (err, customers) => {
            if (err) {
                res.json(err);
            }
            res.render('customers', {
                data: customers
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query(`call addDepartamento('${data.nome}','${data.coordenador}')`, (err, customer) => {
            res.redirect('/');
        })
    })
};


controller.edit = (req,res)=>{
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM departamento WHERE Nome = ?', [id], (err, customer) => {
            console.log(customer)
            res.render('./customer_edit', {
                data: customer[0]
            });
        });
    });
};

controller.update = (req,res)=>{
    const {id} = req.params;
    const newCustomer = req.body;
    req.getConnection((err,conn) =>{
        conn.query('UPDATE departamento set ? WHERE (`Nome` = ?)', [newCustomer,id], (err, customer)=>{
            res.redirect('/');
        })
    })
}

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM departamento WHERE (`Nome` = ?)', [id], (err, customer) => {
            res.redirect('/');
        })
    })
};

module.exports = controller;