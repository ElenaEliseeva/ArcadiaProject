using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

        // GET: api/Reminders
        [HttpGet]
        public List<string> Get()
        {
            var remainders = ctx.Reminders.Select(r => r.Body).ToList();
            return remainders;
        }

        // GET: api/Reminders/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return ctx.Reminders.Find(id).Body;
        }

        // POST: api/Reminders
        [HttpPost]
        public async Task<ActionResult<Reminders>> Post(Reminders reminder)
        {
            if (reminder == null)
            {
                return BadRequest();
            }
            ctx.Reminders.Add(reminder);
            await ctx.SaveChangesAsync();
            return Ok(reminder);
        }

        // PUT: api/Reminders
        [HttpPut]
        public async Task<ActionResult<Reminders>> Put(Reminders reminder)
        {
            if (reminder == null)
            {
                return BadRequest();
            }
            if (!ctx.Reminders.Any(x => x.IdReminder == reminder.IdReminder))
            {
                return NotFound();
            }
            ctx.Update(reminder);
            await ctx.SaveChangesAsync();
            return Ok(reminder);
        }

        // DELETE: api/Reminder/5
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
