using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;


namespace backend.Models
{
    [Table("Papeis")]
    public class Papel
    {
        [Display(Name = "Id")]
        [Column("Id")]
        public int id { get; set; }

        [Display(Name = "Nome")]
        [Column("Nome")]
        public string Nome { get; set; }

        [Display(Name = "Sigla")]
        [Column("Sigla")]
        public string Sigla { get; set; }
        
        public DateTime CreateDate { get; set; }

        public Nullable<DateTime> LastUpdateDate { get; set; }

    }
}    