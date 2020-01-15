﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        // GET: api/Reminders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reminders>>> Get()
        {
            return await ctx.Reminders.ToListAsync();
        }

        // GET: api/Reminders/5
        [HttpGet("{id}", Name = "Get")]
        public async Task<ActionResult<Reminders>> Get(int id)
        {
            Reminders reminder  = await ctx.Reminders.FirstOrDefaultAsync(x => x.IdReminder == id);
            if (reminder == null)
                return NotFound();
            return new ObjectResult(reminder);
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
