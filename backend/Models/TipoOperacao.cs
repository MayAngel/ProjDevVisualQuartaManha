using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;

namespace backend.Models
{
    [Table("TipoOperacao")]
    public class TipoOperacao
    {
        [Display(Name = "Id")]
        [Column("Id")]
        public int Id { get; set; }

        [Display(Name = "Nome")]
        [Column("Nome")]
        public string Nome { get; set; }

        [Display(Name = "Sigla")]
        [Column("Sigla")]
        public string Sigla { get; set; }
    }
}