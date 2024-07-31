﻿using API.Data;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions;

public static class ApplicationServiceExtensions
{
  public static IServiceCollection AddAplicationServices(this IServiceCollection services, IConfiguration config)
  {
    services.AddControllers();
    services.AddDbContext<DataContext>(opt =>
    {

      opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
    });
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    services.AddEndpointsApiExplorer();
    services.AddSwaggerGen();
    services.AddCors();
    services.AddScoped<ITokenService, TokenService>();

    return services;
  }
}