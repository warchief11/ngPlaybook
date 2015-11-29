using System;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using NgPlaybook.Server.Config;

namespace NgPlaybook.Server.Auth
{
    public class YummyOAuthOptions : OAuthAuthorizationServerOptions
    {
        public YummyOAuthOptions()
        {
            var config = AppConfiguration.Config;

            TokenEndpointPath = new PathString(config.TokenPath);
            AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(config.ExpirationMinutes);
            AccessTokenFormat = new YummyJwtWriterFormat();
            Provider = new YummyOAuthProvider();
            #if DEBUG
                AllowInsecureHttp = true;
            #endif
        }
    }
}