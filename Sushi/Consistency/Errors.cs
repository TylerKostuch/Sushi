﻿using System;
using Sushi.Descriptors;
using Sushi.Interfaces;

namespace Sushi.Consistency
{
    /// <summary>
    ///     Container class to keep the error messages in one place.
    /// </summary>
    public static class Errors
    {
        private const string XML_DOC_INSTRUCTIONS = "\n\rMake sure you're using the XML file generated by Visual Studio.\n\rYou can generate the in the project properties > build > XML Documentation File (checked).";

        public static InvalidOperationException LanguageAlreadyDefined()
            => new InvalidOperationException($@"A conversion target has already been specified, use the '{nameof(ConversionKernel)}' to create a new instance.");

        public static InvalidOperationException NoLanguageDefined()
            => new InvalidOperationException(@"Expected a target language to be defined.");

        public static InvalidOperationException DuplicateLanguageSpecification(ILanguageSpecification lang)
            => new InvalidOperationException($@"The language specification '{lang.Language} - V{lang.Version}' is already present.");

        public static Exception NonExistentLanguageFile(string path)
            => new InvalidOperationException($"The {nameof(path)} to the language template does not direct to a existing file. \n\r Path '{path}'.");

        public static Exception LanguageNotFound()
            => new ArgumentException($@"No default or custom {nameof(ILanguageSpecification)} found.");

        public static ArgumentException OnlyInlineCommentsSupported(string comment)
            => new ArgumentException($"Only single-line comments are supported. \n\rGiven comment: \r\n\r\n{comment}", nameof(comment));

        public static InvalidOperationException LanguageVersionMismatch(Version version)
            => new InvalidOperationException($@"Unexpected version '{version}' type wasn't processed properly.");

        public static InvalidOperationException PropertyTypeNotSupported(string typeName)
            => new InvalidOperationException($@"Given {typeName} is not processed by the current {nameof(LanguageSpecification)}.");

        public static ArgumentException XmlDocumentExpected(string path)
            => new ArgumentException($"Expected the path '{path}' to lead to a XML file.{XML_DOC_INSTRUCTIONS}");

        public static InvalidOperationException NonExistentFile(string path)
            => new InvalidOperationException($"Could not read the file for the given path '{path}'.\n\rIs the file in use or is the path incorrect?");

        public static InvalidOperationException IncompatibleXmlDocument(object missingNode)
            => new InvalidOperationException($"Expected the node '{missingNode}' to exist in the loaded XML file.{XML_DOC_INSTRUCTIONS}");

        public static InvalidOperationException EnumUnavailable(PropertyDescriptor property)
            => new InvalidOperationException($@"The {property.Type.FullName} {nameof(System.Enum)} for the given {nameof(property)} is expected to be available.");

        public static ArgumentNullException NoScriptAvailableInModels(string paramName)
            => new ArgumentNullException(paramName, $@"No members found with its '{nameof(ClassDescriptor.Script)}' set, call {nameof(ModelConverter.Compile)} first.");

        public static InvalidOperationException NoPlaceholdersInTemplate()
            => new InvalidOperationException(@"The given template does not have any placeholders to use.");

        public static InvalidOperationException NoWrapTemplateAvailable()
            => new InvalidOperationException(@"Expected a template to be available to wrap around one or more available script model(s).");

        public static InvalidOperationException OneAssemblyExpected()
            => new InvalidOperationException(@"Expected the given types to originate from the same assembly.");
    }
}