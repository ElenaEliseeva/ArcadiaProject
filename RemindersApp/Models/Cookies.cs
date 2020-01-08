using System;
using System.Collections.Generic;

namespace RemindersApp.Models
{
    public partial class Cookies
    {
        public Cookies()
        {
            Reminders = new HashSet<Reminders>();
        }

        public long IdCookie { get; set; }
        public string Cookie { get; set; }

        public virtual ICollection<Reminders> Reminders { get; set; }
    }
}
