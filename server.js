const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();
const port = 3000;

    app.use(bodyParser.json());

    app.get('/api/json', (req, res) => {
            const jsonData = {
                "Catalog": {
                    "products": [
                        {
                        "ProductID": "101",
                        "Name": "Smartphnone",
                        "Category": "Electronics",
                        "Price": 299.99,
                        "Stock": 25
                        },
                        {
                            "ProductID": "102",
                            "Name":"Laptop",
                            "Category":"Electronics",
                            "Price": 799.99,
                            "Stock": 15
                        }
                    ]
                }
            };
            res.json(jsonData);
    });

    app.get('/api/xml', (req, res) => {
        res.set('Content-Type',  'text/xml');
        const xmlData = `
        <Catalog>
            <Product ProductID = "101"> 
            <Name>Smartphnone</Name>
            <Category>Electronics</Category>
            <Price>299.99</Price>
            <Stock>25</Stock>
            </Product>

            <Product ProductID = "102">
            <Name>Laptop</Name>
            <Category>Electronics</Category>
            <Price>799.99</Price>
            <Stock>15</Stock>
            </Product>
        </Catalog>`;
            
            res.send(xmlData);
    });

    app.listen(port, () => {
        console.log(`Microservice running at http://localhost:${port}`);

    });