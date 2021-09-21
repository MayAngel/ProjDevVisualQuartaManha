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
    public class CorretoraController : ControllerBase
    {
        private readonly CarteiraContext _context;

        public CorretoraController(CarteiraContext context)
        {
            _context = context;
        }

        // GET: api/Corretora
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Corretora>>> GetCorretora()
        {
            return await _context.Corretora.ToListAsync();
        }

        // GET: api/Corretora/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Corretora>> GetCorretora(int id)
        {
            var corretora = await _context.Corretora.FindAsync(id);

            if (corretora == null)
            {
                return NotFound();
            }

            return corretora;
        }

        // PUT: api/Corretora/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCorretora(int id, Corretora corretora)
        {
            if (id != corretora.id)
            {
                return BadRequest();
            }

            _context.Entry(corretora).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CorretoraExists(id))
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

        // POST: api/Corretora
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Corretora>> PostCorretora(Corretora corretora)
        {
            corretora.CreateDate = DateTime.Now;
            _context.Corretora.Add(corretora);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCorretora", new { id = corretora.id }, corretora);
        }

        // DELETE: api/Corretora/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCorretora(int id)
        {
            var corretora = await _context.Corretora.FindAsync(id);
            if (corretora == null)
            {
                return NotFound();
            }

            _context.Corretora.Remove(corretora);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CorretoraExists(int id)
        {
            return _context.Corretora.Any(e => e.id == id);
        }
    }
}
