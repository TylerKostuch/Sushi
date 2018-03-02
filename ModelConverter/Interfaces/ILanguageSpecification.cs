﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Common.Utility.Enum;
using ModelConverter.Models;
using ModelConverter.Templates.Languages;
using ModelConverter.Templates.Recognition;

namespace ModelConverter.Interfaces
{
    /// <summary>
    ///     What and how to format specific property(s) for the related code-language.
    /// </summary>
    /// <inheritdoc />
    public interface ILanguageSpecification : IEquatable<LanguageSpecification>
    {
        /// <summary>
        ///     The directory path to the template file.
        /// </summary>
        string FilePath { get; }

        /// <summary>
        ///     The <see cref="Language"/> (key) for this <see cref="LanguageSpecification"/>.
        /// </summary>
        string Language { get; }

        /// <summary>
        ///     The <see cref="Version"/> (key) for this <see cref="LanguageSpecification"/>.
        /// </summary>
        Version Version { get; }

        /// <summary>
        ///     If this <see cref="ILanguageSpecification"/> refers to a isolated model instance.
        /// </summary>
        bool IsIsolated { get; }

        /// <summary>
        ///     What object path the generated model should be assigned to.
        /// </summary>
        string TargetObject { get; set; }

        /// <summary>
        ///     If this <see cref="LanguageSpecification"/> has a template ready.
        /// </summary>
        bool IsLoaded { get; }

        /// <summary>
        ///     The <see cref="Template"/> text that has been loaded into this <see cref="ILanguageSpecification"/>.
        /// </summary>
        string Template { get; }

        /// <summary>
        ///     Format the <paramref name="property"/> to compile for the current <see cref="LanguageSpecification"/>.
        ///  </summary>
        string FormatProperty(Property property);

        /// <summary>
        ///     Format the validation for the <paramref name="property"/> to compile for the current <see cref="LanguageSpecification"/>.
        ///  </summary>
        IEnumerable<string> FormatRecognition(Property property, IEnumerable<DataModel> referenceDataModels);

        /// <summary>
        ///     Get the default <see cref="string"/> value that reflects the given <see cref="CSharpNativeType"/> 
        ///     for the current <see cref="Language"/>.
        /// </summary>
        string GetDefaultForType(CSharpNativeType type);

        /// <summary>
        ///     Apply formatting to the given <paramref name="value"/> of <see cref="CSharpNativeType"/>.
        /// </summary>
        string FormatValueForType(CSharpNativeType type, object value);

        /// <summary>
        ///     Load the file that the <see cref="LanguageSpecification.FilePath"/> directs to.
        /// </summary>
        LanguageSpecification LoadFile();

        /// <summary>
        ///     Start a new <see cref="Task"/> for loading the file that the <see cref="LanguageSpecification.FilePath"/> directs to.
        /// </summary>
        Task<LanguageSpecification> LoadFileAsync();

        /// <summary>
        ///     Use the given <paramref name="template"/>.
        /// </summary>
        LanguageSpecification UseTemplate(string template);

        /// <summary>
        ///     Use the given <paramref name="kernel"/> instance for options.
        /// </summary>
        LanguageSpecification UseKernel(ConversionKernel kernel);
    }
}
