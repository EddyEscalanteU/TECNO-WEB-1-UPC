using WebAppWithORM.Entidades;

namespace WebAppWithORM.Interface
{
    public interface ICompanyRepository
    {
        public Task<IEnumerable<Company>> GetCompanies();

    }
}
