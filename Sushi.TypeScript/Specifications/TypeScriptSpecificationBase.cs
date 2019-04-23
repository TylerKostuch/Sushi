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
            var tsTypeName = GetBaseType(property.NativeType.IncludeOverride(kernel, property.Type));
            var type = Nullable.GetUnderlyingType(property.Type) ?? property.Type;
            if (type == typeof(DateTime))
                tsTypeName = "Date";
            else
            {
                // Check if any of the available models have the same name and should be used.
                var dataModel = kernel.Models.FirstOrDefault(x => x.FullName == type.FullName);
                if (!ReferenceEquals(dataModel, null))
                    tsTypeName = dataModel.Name;
            }

            if (type.IsTypeOrInheritsOf(typeof(IDictionary)))
            {
                var args = property.Property.PropertyType.GetGenericArguments().Select(x =>
                {
                    var dataModel = kernel.Models.FirstOrDefault(y => y.FullName == x.FullName);
                    if (!ReferenceEquals(dataModel, null))
                        return dataModel.Name;
                    
                    return GetBaseType(x.ToNativeTypeEnum());
                }).ToList();
                return $"Record<{args[0]}, {args[1]}>";
            }
            else if (property.Property.PropertyType.IsGenericType && type.IsTypeOrInheritsOf(typeof(IEnumerable)) && type != typeof(string))
            {
                var args = property.Property.PropertyType.GenericTypeArguments;
                if (args[0].IsTypeOrInheritsOf(typeof(IEnumerable)) && !(args[0] == typeof(string)))
                {
                    tsTypeName = string.Join(" | ", property.Property.PropertyType.GenericTypeArguments.Select(x =>
                    {
                        var dataModel = kernel.Models.FirstOrDefault(y => y.FullName == x.FullName);
                        if (!ReferenceEquals(dataModel, null))
                            return dataModel.Name;
                    
                        return GetBaseType(x.ToNativeTypeEnum());
                    }).ToList());
                    return $"Array<Array<{tsTypeName}>>";
                }
                
                // This really should be a recursive call to FormatPropertyType
                tsTypeName = string.Join(" | ", property.Property.PropertyType.GenericTypeArguments.Select(x =>
                {
                    var dataModel = kernel.Models.FirstOrDefault(y => y.FullName == x.FullName);
                    if (!ReferenceEquals(dataModel, null))
                        return dataModel.Name;
                    
                    return GetBaseType(x.ToNativeTypeEnum());
                }).ToList());
                return $"Array<{tsTypeName}>";
            }
            
            return  tsTypeName;   
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
        public override IEnumerable<string> FormatPropertyDefinition(ConversionKernel kernel, PropertyDescriptor property)
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