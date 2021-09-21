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
    public class PapelController : ControllerBase
    {
        private readonly CarteiraContext _context;

        public PapelController(CarteiraContext context)
        {
            _context = context;
        }

        // GET: api/Papel
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Papel>>> GetPapel()
        {
            return await _context.Papel.ToListAsync();
        }

        // GET: api/Papel/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Papel>> GetPapel(int id)
        {
            var papel = await _context.Papel.FindAsync(id);

            if (papel == null)
            {
                return NotFound();
            }

            return papel;
        }

        // PUT: api/Papel/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPapel(int id, Papel papel)
        {
            if (id != papel.id)
            {
                return BadRequest();
            }

            _context.Entry(papel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PapelExists(id))
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

        // POST: api/Papel
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Papel>> PostPapel(Papel papel)
        {
            papel.CreateDate = DateTime.Now;
            _context.Papel.Add(papel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPapel", new { id = papel.id }, papel);
        }

        // DELETE: api/Papel/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePapel(int id)
        {
            var papel = await _context.Papel.FindAsync(id);
            if (papel == null)
            {
                return NotFound();
            }

            _context.Papel.Remove(papel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PapelExists(int id)
        {
            return _context.Papel.Any(e => e.id == id);
        }
    }
}
