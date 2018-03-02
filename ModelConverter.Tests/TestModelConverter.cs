﻿using System;
using System.Diagnostics;
using System.Linq;
using Common.Utility.Enum.ECMAScript;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelConverter.Templates;
using ModelConverter.Tests.Models;

namespace ModelConverter.Tests
{
    [TestClass]
    public class TestModelConverter
    {
        public TestContext Context { get; set; }

        [TestInitialize]
        public void BeforeTest()
        {
        }

        [TestMethod]
        public void TestFindModelsInAssembly()
        {
            using (var kernel = new ConversionKernel())
            {
                var template = TemplateManager.ForJavaScript(kernel, EcmaVersion.V6, false);
                var converter = kernel.CreateConverter(typeof(TestModelConverter).Assembly, template);

                Assert.IsTrue(converter.ModelCount > 0);
                Assert.IsTrue(converter.Models.Any(x => x.Name == nameof(NameModel)));
            }
        }

        [TestMethod]
        public void TestFieldFindingInModel()
        {
            using (var kernel = new ConversionKernel())
            {
                var template = TemplateManager.ForJavaScript(kernel, EcmaVersion.V6, false);
                var converter = kernel.CreateConverter(typeof(TestModelConverter).Assembly, template);

                var firstModel = converter.Models.First();

                Assert.IsTrue(firstModel.Properties.Count >= 3);
                var name = firstModel.Properties.Single(x => x.Name.ToLower() == "name");
                var insertion = firstModel.Properties.Single(x => x.Name.ToLower() == "insertion");
                var surname = firstModel.Properties.Single(x => x.Name.ToLower() == "surname");

                Assert.IsNotNull(name);
                Assert.IsNotNull(insertion);
                Assert.IsNotNull(surname);

                Assert.AreEqual(name.Value.ToString(), "Jeroen");
                Assert.AreEqual(surname.Value.ToString(), "Vorsselman");
            }
        }

        [TestMethod]
        public void TestBasicModelCompilation()
        {
            using (var kernel = new ConversionKernel())
            {
                var template = TemplateManager.ForJavaScript(kernel, EcmaVersion.V5, false);
                var converter = kernel.CreateConverter(typeof(TestModelConverter).Assembly, template);

                var result = converter.Convert();

                Console.WriteLine(result);

                Assert.IsTrue(result != string.Empty);
            }
        }
    }
}
