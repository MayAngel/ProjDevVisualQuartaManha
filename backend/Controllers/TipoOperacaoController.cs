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
    [Route("api/tipoOperacao")]
    [ApiController]
    public class TipoOperacaoController : ControllerBase
    {
        private readonly CarteiraContext _context;

        public TipoOperacaoController(CarteiraContext context)
        {
            _context = context;
        }

        // GET: api/TipoOperacao
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoOperacao>>> GetTipoOperacao()
        {
            return await _context.TipoOperacao.ToListAsync();
        }

        // GET: api/TipoOperacao/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoOperacao>> GetTipoOperacao(int id)
        {
            var tipoOperacao = await _context.TipoOperacao.FindAsync(id);

            if (tipoOperacao == null)
            {
                return NotFound();
            }

            return tipoOperacao;
        }

        // PUT: api/TipoOperacao/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoOperacao(int id, TipoOperacao tipoOperacao)
        {
            if (id != tipoOperacao.Id)
            {
                return BadRequest();
            }

            _context.Entry(tipoOperacao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoOperacaoExists(id))
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

        // POST: api/TipoOperacao
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("create")]
        public async Task<ActionResult<TipoOperacao>> PostTipoOperacao(TipoOperacao tipoOperacao)
        {
            _context.TipoOperacao.Add(tipoOperacao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoOperacao", new { id = tipoOperacao.Id }, tipoOperacao);
        }

        // DELETE: api/TipoOperacao/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoOperacao(int id)
        {
            var tipoOperacao = await _context.TipoOperacao.FindAsync(id);
            if (tipoOperacao == null)
            {
                return NotFound();
            }

            _context.TipoOperacao.Remove(tipoOperacao);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TipoOperacaoExists(int id)
        {
            return _context.TipoOperacao.Any(e => e.Id == id);
        }
    }
}
