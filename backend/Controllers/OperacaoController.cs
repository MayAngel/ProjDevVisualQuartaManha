using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperacaoController : ControllerBase
    {
        private readonly CarteiraContext _context;

        public OperacaoController(CarteiraContext context)
        {
            _context = context;
        }

        // GET: api/Operacao
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Operacao>>> GetOperacao()
        {
            return await _context.Operacao.ToListAsync();
        }

        // GET: api/Operacao/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Operacao>> GetOperacao(int id)
        {
            var operacao = await _context.Operacao.FindAsync(id);

            if (operacao == null)
            {
                return NotFound();
            }

            return operacao;
        }

        // PUT: api/Operacao/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOperacao(int id, Operacao operacao)
        {
            if (id != operacao.Id)
            {
                return BadRequest();
            }

            _context.Entry(operacao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OperacaoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Operacao
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Operacao>> PostOperacao(Operacao operacao)
        {
            operacao.CreateDate = DateTime.Now;
            _context.Operacao.Add(operacao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOperacao", new { id = operacao.Id }, operacao);
        }

        // DELETE: api/Operacao/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOperacao(int id)
        {
            var operacao = await _context.Operacao.FindAsync(id);
            if (operacao == null)
            {
                return NotFound();
            }

            _context.Operacao.Remove(operacao);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OperacaoExists(int id)
        {
            return _context.Operacao.Any(e => e.Id == id);
        }
    }
}
