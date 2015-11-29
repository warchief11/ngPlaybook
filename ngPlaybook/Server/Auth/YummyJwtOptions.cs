using Microsoft.Owin.Security.Jwt;
using NgPlaybook.Server.Config;

namespace NgPlaybook.Server.Auth
{
    public class YummyJwtOptions : JwtBearerAuthenticationOptions
    {
        public YummyJwtOptions()
        {
            var config = AppConfiguration.Config;
          
            AllowedAudiences = new[] { config.JwtAudience };
            IssuerSecurityTokenProviders = new[]
            {
                new SymmetricKeyIssuerSecurityTokenProvider(config.JwtIssuer, config.JwtKey)
            };
        }
    }
}