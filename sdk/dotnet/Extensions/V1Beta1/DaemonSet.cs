// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Extensions.V1Beta1
{
    /// <summary>
    /// DEPRECATED - extensions/v1beta1/DaemonSet is deprecated by apps/v1/DaemonSet and not
    /// supported by Kubernetes v1.16+ clusters.
    /// 
    /// DaemonSet represents the configuration of a daemon set.
    /// </summary>
    public partial class DaemonSet : Pulumi.CustomResource
    {
        /// <summary>
        /// APIVersion defines the versioned schema of this representation of an object. Servers
        /// should convert recognized schemas to the latest internal value, and may reject
        /// unrecognized values. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
        /// </summary>
        [Output("apiVersion")]
        public Output<string> ApiVersion { get; private set; } = null!;

        /// <summary>
        /// Kind is a string value representing the REST resource this object represents. Servers
        /// may infer this from the endpoint the client submits requests to. Cannot be updated. In
        /// CamelCase. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
        /// </summary>
        [Output("kind")]
        public Output<string> Kind { get; private set; } = null!;

        /// <summary>
        /// Standard object's metadata. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
        /// </summary>
        [Output("metadata")]
        public Output<Types.Outputs.Meta.V1.ObjectMeta> Metadata { get; private set; } = null!;

        /// <summary>
        /// The desired behavior of this daemon set. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
        /// </summary>
        [Output("spec")]
        public Output<Types.Outputs.Extensions.V1Beta1.DaemonSetSpec> Spec { get; private set; } = null!;

        /// <summary>
        /// The current status of this daemon set. This data may be out of date by some window of
        /// time. Populated by the system. Read-only. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
        /// </summary>
        [Output("status")]
        public Output<Types.Outputs.Extensions.V1Beta1.DaemonSetStatus> Status { get; private set; } = null!;


        /// <summary>
        /// Create a DaemonSet resource with the given unique name, arguments, and options.
        /// </summary>
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public DaemonSet(string name, Types.Inputs.Extensions.V1Beta1.DaemonSetArgs? args = null, CustomResourceOptions? options = null)
            : base("kubernetes:extensions/v1beta1:DaemonSet", name, SetAPIKindAndVersion(args), MakeResourceOptions(options))
        {
        }

        private static ResourceArgs SetAPIKindAndVersion(Types.Inputs.Extensions.V1Beta1.DaemonSetArgs? args)
        {
            if (args != null) {
                args.ApiVersion = "extensions/v1beta1";
                args.Kind = "DaemonSet";
            }
            return args ?? ResourceArgs.Empty;
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            return CustomResourceOptions.Merge(defaultOptions, options);
        }

        /// <summary>
        /// Get an existing DaemonSet resource's state with the given name and ID.
        /// </summary>
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static DaemonSet Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new DaemonSet(name, null, CustomResourceOptions.Merge(options, new CustomResourceOptions
            {
                Id = id,
            }));
        }

    }
}