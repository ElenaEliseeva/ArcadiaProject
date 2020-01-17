using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace RemindersApp.Models
{
    public partial class RemindersAppDataContext : DbContext
    {
        public RemindersAppDataContext()
        {
        }

        public RemindersAppDataContext(DbContextOptions<RemindersAppDataContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Reminders> Reminders { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlite("DataSource=RemindersAppData.sqlite3");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Reminders>(entity =>
            {
                entity.HasKey(e => e.IdReminder);

                entity.Property(e => e.IdReminder)
                    .HasColumnName("id_reminder")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.Body)
                    .IsRequired()
                    .HasColumnName("body");

                entity.Property(e => e.Cookie).HasColumnName("cookie");

                entity.Property(e => e.TimeToWork)
                    .IsRequired()
                    .HasColumnName("time_to_work");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
