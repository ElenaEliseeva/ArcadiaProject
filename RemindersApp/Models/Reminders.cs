using System;
using System.Collections.Generic;

namespace RemindersApp.Models
{
    public partial class Reminders
    {
        public long IdReminder { get; set; }
        public string Body { get; set; }
        public string TimeToWork { get; set; }
        public long IdPriority { get; set; }
        public long? IdCookie { get; set; }

        public virtual Cookies IdCookieNavigation { get; set; }
        public virtual Priorities IdPriorityNavigation { get; set; }
    }
}
