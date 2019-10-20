using System.Web.Mvc;
using System.Web.Optimization;
using Umbraco.Core;
using Umbraco.Core.Composing;

namespace Biztechnosys.Umbraco.Website.App_Start
{
    [RuntimeLevel(MinLevel = RuntimeLevel.Run)]
    public class StartupComposer : IUserComposer
    {
        public void Compose(Composition composition)
        {
            composition.Components().Append<MyComponent>();
        }

        public class MyComponent : IComponent
        {
            public MyComponent()
            {

            }

            public void Initialize()
            {
                AreaRegistration.RegisterAllAreas();
                BundleConfig.RegisterBundles(BundleTable.Bundles);
            }

            public class BundleConfig
            {
                public static void RegisterBundles(BundleCollection bundles)
                {
                    bundles.Add(new StyleBundle("~/bundles/site.css").Include(
                        "~/css/style.css", "~/css/owl.carousel.min.css", "~/css/owl.theme.default.min.css"
                    ));

                    bundles.Add(new ScriptBundle("~/bundles/JS").Include(
                        "~/Js/*.js"
                    ));


                    BundleTable.EnableOptimizations = true;
                }

            }

            public void Terminate()
            {

            }
        }
    }

}