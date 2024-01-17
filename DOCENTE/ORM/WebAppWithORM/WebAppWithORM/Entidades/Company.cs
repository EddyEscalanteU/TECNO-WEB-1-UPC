namespace WebAppWithORM.Entidades
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Country { get; set; }

        public List<Employee> Employees { get; set; } = new List<Employee>();
    }

    /*
     CREATE TABLE Company (
    Id INT PRIMARY KEY,
    Name VARCHAR(255),
    Address VARCHAR(255),
    Country VARCHAR(100)
);


    INSERT INTO Company (Id, Name, Address, Country) VALUES
(1, 'Company A', '123 Main St', 'Country A'),
(2, 'Company B', '456 Elm St', 'Country B'),
(3, 'Company C', '789 Oak St', 'Country C'),
(4, 'Company D', '101 Pine St', 'Country D'),
(5, 'Company E', '202 Maple St', 'Country E'),
(6, 'Company F', '303 Cedar St', 'Country F'),
(7, 'Company G', '404 Birch St', 'Country G'),
(8, 'Company H', '505 Walnut St', 'Country H'),
(9, 'Company I', '606 Cherry St', 'Country I'),
(10, 'Company J', '707 Spruce St', 'Country J');


     */
}
