using Dapper;
using WebAppWithORM.Context;
using WebAppWithORM.Entidades;
using WebAppWithORM.Interface;

namespace WebAppWithORM.Repository
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly DapperContext _context;

        public CompanyRepository(DapperContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Company>> GetCompanies()
        {
            var query = "SELECT * FROM Company";

            using (var connection = _context.CreateConnection())
            {
                var companies = await connection.QueryAsync<Company>(query);
                return companies.ToList();
            }
        }
    }
}
