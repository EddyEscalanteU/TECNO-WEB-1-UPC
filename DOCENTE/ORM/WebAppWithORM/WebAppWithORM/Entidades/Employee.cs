namespace WebAppWithORM.Entidades
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Position { get; set; }
        public int CompanyId { get; set; }
    }

    /*
 CREATE TABLE Employee (
    Id INT PRIMARY KEY,
    Name VARCHAR(255),
    Age INT,
    Position VARCHAR(100),
    CompanyId INT,
    FOREIGN KEY (CompanyId) REFERENCES Company(Id)
);


    INSERT INTO Employee (Id, Name, Age, Position, CompanyId) VALUES
(1, 'John Doe', 30, 'Manager', 1),
(2, 'Jane Smith', 25, 'Assistant', 2),
(3, 'Michael Johnson', 28, 'Developer', 3),
(4, 'Emily Williams', 35, 'HR Manager', 4),
(5, 'Chris Brown', 27, 'Analyst', 5),
(6, 'Sarah Davis', 29, 'Designer', 6),
(7, 'Kevin Martinez', 31, 'Engineer', 7),
(8, 'Amanda Garcia', 26, 'Marketing', 8),
(9, 'Robert Rodriguez', 33, 'Sales', 9),
(10, 'Olivia Lopez', 24, 'Intern', 10);

     */
}
