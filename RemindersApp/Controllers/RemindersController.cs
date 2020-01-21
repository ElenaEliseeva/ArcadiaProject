﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
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
            if (Request.Cookies["RemindrsApp"] == null)
            {
                Response.Cookies.Append("RemindrsApp", СreateCookie(8));
            }
            string cookie = Request.Cookies["RemindrsApp"];
            return await ctx.Reminders.Where(s => s.Cookie.Contains(cookie)).OrderByDescending(s => s.TimeToWork).ToListAsync();
        }

        // POST: api/Reminders
        [HttpPost]
        public async Task<ActionResult<Reminders>> Post([FromBody] Reminders reminder)
        {
            if (reminder == null)
            {
                return BadRequest();
            }
            reminder.Cookie = Request.Cookies["RemindrsApp"];
            ctx.Reminders.Add(reminder);
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

        public string СreateCookie(int length)
        {
            Random rnd = new Random();
            String alphabet  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            string cookie = "";

            for (int i = 0; i < length; i++)
            {
                int position = rnd.Next(0, alphabet.Length - 1);
                cookie += alphabet[position];
            }

            return cookie;
        }
    }
}
