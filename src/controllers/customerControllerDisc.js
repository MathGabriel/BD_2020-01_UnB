const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM mecDisciplina', (err, customers) => {
            if (err) {
                res.json(err);
            }
            res.render('customersDisc', {
                data: customers
            });
        });
    });
};


controller.save = (req, res) => {
    const data = req.body;
    console.log(data);

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO disciplina set ?', [data], (err, customer) => {
            res.redirect('/disc');
        })
    })
};

controller.edit = (req,res)=>{
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM disciplina WHERE COD_Matéria = ?', [id], (err, customer) => {
            console.log(customer)
            res.render('./customer_editDisc', {
                data: customer[0]
            });
        });
    });
};

controller.update = (req,res)=>{
    const {id} = req.params;
    const newCustomer = req.body;

    req.getConnection((err,conn) =>{
        conn.query('UPDATE disciplina set ? WHERE (`COD_Matéria` = ?)', [newCustomer,id], (err, customer)=>{
            res.redirect('/disc');
        })
    })
}

controller.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM disciplina WHERE (`COD_Matéria` = ?)', [id], (err, customer) => {
            res.redirect('/disc');
        })
    })
};

module.exports = controller;