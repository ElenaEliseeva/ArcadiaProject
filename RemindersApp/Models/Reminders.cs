using System;
using System.Collections.Generic;

namespace RemindersApp.Models
{
    public partial class Reminders
    {
        public long IdReminder { get; set; }
        public string Body { get; set; }
        public string TimeToWork { get; set; }
        public string Cookie { get; set; }
    }
}
