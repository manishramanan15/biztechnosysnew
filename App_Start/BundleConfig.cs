using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace Biztechnosys.Umbraco.Website.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/bundles/CSS").Include(
                "~/css/style.css"));

            //bundles.Add(new ScriptBundle("~/bundles/Js").Include("~/Scripts/jquery-{version}.js"));
            //Our Script is already minified version at this point of time so i am not using script Bundling here.

            //bundles.Add(new StyleBundle("~/Content/css").IncludeDirectory("~/css/","*.css",true));    

            //LogHelper.Info<string>("Bundles Loaded");

              BundleTable.EnableOptimizations = true;   // we will handle it from webconfig file by setting debug = false in the below line present in web.config file.

            //<compilation defaultLanguage="c#" debug="true" batch="true" targetFramework="4.7.2" numRecompilesBeforeAppRestart="50" />
        }
    }
}