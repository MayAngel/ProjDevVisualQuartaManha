using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;


namespace backend.Models
{ 
    [Table("Usuarios")]
    public class Usuario
    {
        //Construtor
        public Usuario() => CreateDate = DateTime.Now;

        [Display(Name = "Id")]
        [Column("Id")]
        public int id { get; set; }

        [Display(Name = "Nome")]
        [Column("Nome")]
        public string Nome { get; set; }

        [Display(Name = "Email")]
        [Column("Email")]
        public string Email { get; set; }

        public string CPF { get; set; }

        public string senha { get; set; }

        public DateTime CreateDate { get; set; }

        public Nullable<DateTime> LastUpdateDate { get; set; }

        public ICollection<Operacao> Operacoes { get; set; }
       
    }
}