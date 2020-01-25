using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RemindersApp.Models;

namespace RemindersApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RemindersController : ControllerBase
    {
        private RemindersAppDataContext ctx;
        public RemindersController(RemindersAppDataContext ctx)
        {
            this.ctx = ctx;
        }

        [EnableCors("CORS")]
        [HttpGet("{cookie}")]
        public async Task<ActionResult<IEnumerable<Reminders>>> Get(string cookie)
        {
            return await ctx.Reminders.Where(s => s.Cookie.Contains(cookie)).OrderByDescending(s => s.TimeToWork).ToListAsync();
        }

        [EnableCors("CORS")]
        [HttpPost]
        public async Task<ActionResult<Reminders>> Post([FromBody] Reminders reminder)
        {
            if (reminder == null)
            {
                return BadRequest();
            }
            ctx.Reminders.Add(reminder);
            await ctx.SaveChangesAsync();
            return Ok(reminder);
        }

        [EnableCors("CORS")]
        [HttpDelete("{id}")]
        public async Task<ActionResult<Reminders>> Delete(int id)
        {
            Reminders reminder = ctx.Reminders.FirstOrDefault(x => x.IdReminder == id);
            if (reminder == null)
            {
                return NotFound();
            }
            ctx.Reminders.Remove(reminder);

            await ctx.SaveChangesAsync();
            return Ok(reminder);
        }
    }
}
