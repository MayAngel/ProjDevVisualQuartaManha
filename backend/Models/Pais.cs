using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;



namespace backend.Models
{
    [Table("Pais")]
    public class Pais
    {
        [Display(Name = "Id")]
        [Column("id")]
        public int id { get; set; }

        [Display(Name = "Nome")]
        [Column("Nome")]
        public string Nome { get; set; }

        public DateTime CreateDate { get; set; }

        public Nullable<DateTime> LastUpdateDate { get; set; }

        public IEnumerable<Corretora> Corretora { get; set; }
    }
}