using System;
using System.Collections.Generic;

namespace RemindersApp.Models
{
    public partial class Priorities
    {
        public Priorities()
        {
            Reminders = new HashSet<Reminders>();
        }

        public long IdPriority { get; set; }
        public string Priority { get; set; }

        public virtual ICollection<Reminders> Reminders { get; set; }
    }
}
