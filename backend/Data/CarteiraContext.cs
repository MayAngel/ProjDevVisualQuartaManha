using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class CarteiraContext : DbContext
    {
    public CarteiraContext(DbContextOptions<CarteiraContext> options) : base(options)
        {
            Database.EnsureCreated();
            Database.Migrate();
        }

        public DbSet<Categoria> Categoria { get; set; }
        public DbSet<Pais> Pais { get; set; }
        public DbSet<Corretora> Corretora { get; set; }
        public DbSet<Papel> Papel { get; set; }
        public DbSet<TipoOperacao> TipoOperacao { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Operacao> Operacao { get; set; } 
    }
}