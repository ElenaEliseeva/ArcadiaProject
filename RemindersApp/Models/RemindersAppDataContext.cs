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

        public virtual DbSet<Cookies> Cookies { get; set; }
        public virtual DbSet<Priorities> Priorities { get; set; }
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
            modelBuilder.Entity<Cookies>(entity =>
            {
                entity.HasKey(e => e.IdCookie);

                entity.Property(e => e.IdCookie)
                    .HasColumnName("id_cookie")
                    .ValueGeneratedNever();

                entity.Property(e => e.Cookie)
                    .IsRequired()
                    .HasColumnName("cookie");
            });

            modelBuilder.Entity<Priorities>(entity =>
            {
                entity.HasKey(e => e.IdPriority);

                entity.Property(e => e.IdPriority)
                    .HasColumnName("id_priority")
                    .ValueGeneratedNever();

                entity.Property(e => e.Priority)
                    .IsRequired()
                    .HasColumnName("priority");
            });

            modelBuilder.Entity<Reminders>(entity =>
            {
                entity.HasKey(e => e.IdReminder);

                entity.Property(e => e.IdReminder)
                    .HasColumnName("id_reminder")
                    .ValueGeneratedNever();

                entity.Property(e => e.Body)
                    .IsRequired()
                    .HasColumnName("body");

                entity.Property(e => e.IdCookie).HasColumnName("id_cookie");

                entity.Property(e => e.IdPriority).HasColumnName("id_priority");

                entity.Property(e => e.TimeToWork)
                    .IsRequired()
                    .HasColumnName("time_to_work");

                entity.HasOne(d => d.IdCookieNavigation)
                    .WithMany(p => p.Reminders)
                    .HasForeignKey(d => d.IdCookie)
                    .OnDelete(DeleteBehavior.Cascade);

                entity.HasOne(d => d.IdPriorityNavigation)
                    .WithMany(p => p.Reminders)
                    .HasForeignKey(d => d.IdPriority);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
