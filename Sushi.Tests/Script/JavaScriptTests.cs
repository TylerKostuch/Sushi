﻿using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Sushi.JavaScript.Enum;
using Sushi.Models;
using Sushi.Tests.Models.Inheritance;

namespace Sushi.Tests.Script
{
	[TestClass]
	public class JavaScriptTests : TestBase
	{
		public TestContext Context { get; set; }

		

		[TestMethod]
		public void CompileAvailableVersionsToFileTest()
		{
			using (var kernel = new ConversionKernel(typeof(ModelTests).Assembly))
			{
				CompileJavaScript(kernel, JavaScriptVersion.V5, false, "complete", null);
				CompileJavaScript(kernel, JavaScriptVersion.V5, true, "complete", null);
				CompileJavaScript(kernel, JavaScriptVersion.V6, false, "complete", null);
			}
		}

		[TestMethod]
		public void CompileInheritanceTest()
		{
			using (var kernel = new ConversionKernel(typeof(ModelTests).Assembly))
			{
				Func<DataModel, bool> predicate = x => x == typeof(PersonModel) || x == typeof(StudentModel);
				CompileJavaScript(kernel, JavaScriptVersion.V5, false, "inherits", predicate);
				CompileJavaScript(kernel, JavaScriptVersion.V5, true, "inherits", predicate);
				CompileJavaScript(kernel, JavaScriptVersion.V6, false, "inherits", predicate);
			}
		}
	}
}