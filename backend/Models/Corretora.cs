using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace backend.Models
{
    [Table("Corretoras")]
    public class Corretora
    {
        [Display(Name = "Id")]
        [Column("Id")]
        public int id { get; set; }

        [Display(Name = "Nome")]
        [Column("Nome")]
        public string Nome { get; set; }

        public DateTime CreateDate { get; set; }

        public Nullable<DateTime> LastUpdateDate { get; set; }

        public int PaisId { get; set; }

        public Pais Pais { get; set; }
    }
}