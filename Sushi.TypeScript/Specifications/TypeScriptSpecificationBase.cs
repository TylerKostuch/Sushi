using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Sushi.Descriptors;
using Sushi.Enum;
using Sushi.Extensions;
using Sushi.Helpers;
using Sushi.JavaScript;

namespace Sushi.TypeScript.Specifications
{
    public abstract class TypeScriptSpecificationBase : JavaScriptSpecification
    {
        #region Overrides of LanguageSpecification

        internal string FormatPropertyType(ConversionKernel kernel, PropertyDescriptor property)
        {
            return FormatPropertyTypeRecursive(kernel, property.Type);
        }

        private string FormatPropertyTypeRecursive(ConversionKernel kernel, Type baseType)
        {
            var type = Nullable.GetUnderlyingType(baseType) ?? baseType;
            var tsTypeName = GetBaseType(type.ToNativeTypeEnum().IncludeOverride(kernel, type));
            if (type == typeof(DateTime))
            {
                tsTypeName = "Date";
            }
            else if (type.IsTypeOrInheritsOf(typeof(IDictionary)))
            {    
                var args = type.GetGenericArguments().Select(x => FormatPropertyTypeRecursive(kernel, x)).ToList();
                tsTypeName = $"Record<{args[0]}, {args[1]}>";
            }
            else if (type.IsGenericType && type.IsTypeOrInheritsOf(typeof(IEnumerable)) && type != typeof(string))
            {
                tsTypeName = string.Join(" | ", type.GenericTypeArguments.Select(x => FormatPropertyTypeRecursive(kernel, x)).ToList());
                tsTypeName = $"Array<{tsTypeName}>";
            }
            else
            {
                // Check if any of the available models have the same name and should be used.
                var dataModel = kernel.Models.FirstOrDefault(x => x.FullName == type.FullName);
                if (!ReferenceEquals(dataModel, null))
                    tsTypeName = dataModel.Name;
            }

            if (baseType.IsNullable())
                tsTypeName += " | null";

            return tsTypeName;
        }

        internal string GetBaseType(NativeType type)
        {
            switch (type)
            {
                case NativeType.Undefined:
                    return @"void";
                case NativeType.Bool:
                    return @"boolean";
                case NativeType.Enum:
                case NativeType.Byte:
                case NativeType.Short:
                case NativeType.Long:
                case NativeType.Int:
                case NativeType.Double:
                case NativeType.Float:
                case NativeType.Decimal:
                    return @"number";
                case NativeType.Object:
                    return @"any";
                case NativeType.Char:
                case NativeType.String:
                    return @"string";
                case NativeType.Null:
                    return @"null";
                default:
                    throw new ArgumentOutOfRangeException(nameof(type), type, null);
            }
        }

        /// <inheritdoc />
        public override IEnumerable<string> FormatPropertyDefinition(ConversionKernel kernel, PropertyDescriptor property, bool explicitDefinition)
        {
            // Return the rows for the js-doc
            var summary = kernel.Documentation?.GetDocumentationForProperty(property.Property);
            if (summary?.Summary.Length > 0)
                yield return $"/** {summary.Summary} */";

            // Apply formatting for TypeScript its Array type.
            var type = FormatPropertyType(kernel, property);
            var name = GetPropertyName(property);

            if (string.IsNullOrEmpty(name))
                name = property.Name;

            if (property.Property.PropertyType.IsNullable() || property.Property.PropertyType.IsInterface || property.Type == typeof(string))
                type += " | null";

            var statement = property.IsReadonly ?
                $@"readonly {name}: {type};" :
                $@"{name}: {type};";

            yield return statement;
        }

        public virtual string GetPropertyName(PropertyDescriptor property) => "";  

        /// <inheritdoc />
        public override ScriptConditionDescriptor FormatComment(string comment, StatementType relatedType)
            => SpecificationDefaults.FormatInlineComment(comment, relatedType);

        #endregion

        protected TypeScriptSpecificationBase(string scriptName, Version version)
            : base(scriptName, version)
        {

        }
    }
}