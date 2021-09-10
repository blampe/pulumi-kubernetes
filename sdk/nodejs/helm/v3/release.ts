// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * A Release is an instance of a chart running in a Kubernetes cluster.
 *
 * A Chart is a Helm package. It contains all of the resource definitions necessary to run an application, tool, or service inside of a Kubernetes cluster.
 */
export class Release extends pulumi.CustomResource {
    /**
     * Get an existing Release resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Release {
        return new Release(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:helm.sh/v3:Release';

    /**
     * Returns true if the given object is an instance of Release.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Release {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Release.__pulumiType;
    }

    /**
     * If set, installation process purges chart on fail. `skipAwait` will be disabled automatically if atomic is used.
     */
    public readonly atomic!: pulumi.Output<boolean>;
    /**
     * Chart name to be installed. A path may be used.
     */
    public readonly chart!: pulumi.Output<string>;
    /**
     * Allow deletion of new resources created in this upgrade when upgrade fails.
     */
    public readonly cleanupOnFail!: pulumi.Output<boolean>;
    /**
     * Create the namespace if it does not exist.
     */
    public readonly createNamespace!: pulumi.Output<boolean>;
    /**
     * Run helm dependency update before installing the chart.
     */
    public readonly dependencyUpdate!: pulumi.Output<boolean>;
    /**
     * Add a custom description
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.
     */
    public readonly devel!: pulumi.Output<boolean>;
    /**
     * Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook
     */
    public readonly disableCRDHooks!: pulumi.Output<boolean>;
    /**
     * If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema
     */
    public readonly disableOpenapiValidation!: pulumi.Output<boolean>;
    /**
     * Prevent hooks from running.
     */
    public readonly disableWebhooks!: pulumi.Output<boolean>;
    /**
     * Force resource update through delete/recreate if needed.
     */
    public readonly forceUpdate!: pulumi.Output<boolean>;
    /**
     * Location of public keys used for verification. Used only if `verify` is true
     */
    public readonly keyring!: pulumi.Output<string>;
    /**
     * Run helm lint when planning.
     */
    public readonly lint!: pulumi.Output<boolean>;
    /**
     * The rendered manifests as JSON. Not yet supported.
     */
    public readonly manifest!: pulumi.Output<{[key: string]: any}>;
    /**
     * Limit the maximum number of revisions saved per release. Use 0 for no limit.
     */
    public readonly maxHistory!: pulumi.Output<number>;
    /**
     * Release name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Namespace to install the release into.
     */
    public readonly namespace!: pulumi.Output<string>;
    /**
     * Postrender command to run.
     */
    public readonly postrender!: pulumi.Output<string>;
    /**
     * Perform pods restart during upgrade/rollback.
     */
    public readonly recreatePods!: pulumi.Output<boolean>;
    /**
     * If set, render subchart notes along with the parent.
     */
    public readonly renderSubchartNotes!: pulumi.Output<boolean>;
    /**
     * Re-use the given name, even if that name is already used. This is unsafe in production
     */
    public readonly replace!: pulumi.Output<boolean>;
    /**
     * Specification defining the Helm chart repository to use.
     */
    public readonly repositoryOpts!: pulumi.Output<outputs.helm.v3.RepositoryOpts>;
    /**
     * When upgrading, reset the values to the ones built into the chart.
     */
    public readonly resetValues!: pulumi.Output<boolean>;
    /**
     * Names of resources created by the release grouped by "kind/version".
     */
    public readonly resourceNames!: pulumi.Output<{[key: string]: string[]}>;
    /**
     * When upgrading, reuse the last release's values and merge in any overrides. If 'resetValues' is specified, this is ignored
     */
    public readonly reuseValues!: pulumi.Output<boolean>;
    /**
     * By default, the provider waits until all resources are in a ready state before marking the release as successful. Setting this to true will skip such await logic.
     */
    public readonly skipAwait!: pulumi.Output<boolean>;
    /**
     * If set, no CRDs will be installed. By default, CRDs are installed if not already present.
     */
    public readonly skipCrds!: pulumi.Output<boolean>;
    /**
     * Status of the deployed release.
     */
    public /*out*/ readonly status!: pulumi.Output<outputs.helm.v3.ReleaseStatus>;
    /**
     * Time in seconds to wait for any individual kubernetes operation.
     */
    public readonly timeout!: pulumi.Output<number>;
    /**
     * List of assets (raw yaml files). Content is read and merged with values. Not yet supported.
     */
    public readonly valueYamlFiles!: pulumi.Output<pulumi.asset.Asset | pulumi.asset.Archive[]>;
    /**
     * Custom values set for the release.
     */
    public readonly values!: pulumi.Output<{[key: string]: any}>;
    /**
     * Verify the package before installing it.
     */
    public readonly verify!: pulumi.Output<boolean>;
    /**
     * Specify the exact chart version to install. If this is not specified, the latest version is installed.
     */
    public readonly version!: pulumi.Output<string>;
    /**
     * Will wait until all Jobs have been completed before marking the release as successful. This is ignored if `skipAwait` is enabled.
     */
    public readonly waitForJobs!: pulumi.Output<boolean>;

    /**
     * Create a Release resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ReleaseArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.chart === undefined) && !opts.urn) {
                throw new Error("Missing required property 'chart'");
            }
            if ((!args || args.repositoryOpts === undefined) && !opts.urn) {
                throw new Error("Missing required property 'repositoryOpts'");
            }
            if ((!args || args.values === undefined) && !opts.urn) {
                throw new Error("Missing required property 'values'");
            }
            inputs["atomic"] = args ? args.atomic : undefined;
            inputs["chart"] = args ? args.chart : undefined;
            inputs["cleanupOnFail"] = args ? args.cleanupOnFail : undefined;
            inputs["compat"] = "true";
            inputs["createNamespace"] = args ? args.createNamespace : undefined;
            inputs["dependencyUpdate"] = args ? args.dependencyUpdate : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["devel"] = args ? args.devel : undefined;
            inputs["disableCRDHooks"] = args ? args.disableCRDHooks : undefined;
            inputs["disableOpenapiValidation"] = args ? args.disableOpenapiValidation : undefined;
            inputs["disableWebhooks"] = args ? args.disableWebhooks : undefined;
            inputs["forceUpdate"] = args ? args.forceUpdate : undefined;
            inputs["keyring"] = args ? args.keyring : undefined;
            inputs["lint"] = args ? args.lint : undefined;
            inputs["manifest"] = args ? args.manifest : undefined;
            inputs["maxHistory"] = args ? args.maxHistory : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namespace"] = args ? args.namespace : undefined;
            inputs["postrender"] = args ? args.postrender : undefined;
            inputs["recreatePods"] = args ? args.recreatePods : undefined;
            inputs["renderSubchartNotes"] = args ? args.renderSubchartNotes : undefined;
            inputs["replace"] = args ? args.replace : undefined;
            inputs["repositoryOpts"] = args ? args.repositoryOpts : undefined;
            inputs["resetValues"] = args ? args.resetValues : undefined;
            inputs["resourceNames"] = args ? args.resourceNames : undefined;
            inputs["reuseValues"] = args ? args.reuseValues : undefined;
            inputs["skipAwait"] = args ? args.skipAwait : undefined;
            inputs["skipCrds"] = args ? args.skipCrds : undefined;
            inputs["timeout"] = args ? args.timeout : undefined;
            inputs["valueYamlFiles"] = args ? args.valueYamlFiles : undefined;
            inputs["values"] = args ? args.values : undefined;
            inputs["verify"] = args ? args.verify : undefined;
            inputs["version"] = args ? args.version : undefined;
            inputs["waitForJobs"] = args ? args.waitForJobs : undefined;
            inputs["status"] = undefined /*out*/;
        } else {
            inputs["atomic"] = undefined /*out*/;
            inputs["chart"] = undefined /*out*/;
            inputs["cleanupOnFail"] = undefined /*out*/;
            inputs["createNamespace"] = undefined /*out*/;
            inputs["dependencyUpdate"] = undefined /*out*/;
            inputs["description"] = undefined /*out*/;
            inputs["devel"] = undefined /*out*/;
            inputs["disableCRDHooks"] = undefined /*out*/;
            inputs["disableOpenapiValidation"] = undefined /*out*/;
            inputs["disableWebhooks"] = undefined /*out*/;
            inputs["forceUpdate"] = undefined /*out*/;
            inputs["keyring"] = undefined /*out*/;
            inputs["lint"] = undefined /*out*/;
            inputs["manifest"] = undefined /*out*/;
            inputs["maxHistory"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["namespace"] = undefined /*out*/;
            inputs["postrender"] = undefined /*out*/;
            inputs["recreatePods"] = undefined /*out*/;
            inputs["renderSubchartNotes"] = undefined /*out*/;
            inputs["replace"] = undefined /*out*/;
            inputs["repositoryOpts"] = undefined /*out*/;
            inputs["resetValues"] = undefined /*out*/;
            inputs["resourceNames"] = undefined /*out*/;
            inputs["reuseValues"] = undefined /*out*/;
            inputs["skipAwait"] = undefined /*out*/;
            inputs["skipCrds"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["timeout"] = undefined /*out*/;
            inputs["valueYamlFiles"] = undefined /*out*/;
            inputs["values"] = undefined /*out*/;
            inputs["verify"] = undefined /*out*/;
            inputs["version"] = undefined /*out*/;
            inputs["waitForJobs"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(Release.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Release resource.
 */
export interface ReleaseArgs {
    /**
     * If set, installation process purges chart on fail. `skipAwait` will be disabled automatically if atomic is used.
     */
    atomic?: pulumi.Input<boolean>;
    /**
     * Chart name to be installed. A path may be used.
     */
    chart: pulumi.Input<string>;
    /**
     * Allow deletion of new resources created in this upgrade when upgrade fails.
     */
    cleanupOnFail?: pulumi.Input<boolean>;
    compat?: pulumi.Input<"true">;
    /**
     * Create the namespace if it does not exist.
     */
    createNamespace?: pulumi.Input<boolean>;
    /**
     * Run helm dependency update before installing the chart.
     */
    dependencyUpdate?: pulumi.Input<boolean>;
    /**
     * Add a custom description
     */
    description?: pulumi.Input<string>;
    /**
     * Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.
     */
    devel?: pulumi.Input<boolean>;
    /**
     * Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook
     */
    disableCRDHooks?: pulumi.Input<boolean>;
    /**
     * If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema
     */
    disableOpenapiValidation?: pulumi.Input<boolean>;
    /**
     * Prevent hooks from running.
     */
    disableWebhooks?: pulumi.Input<boolean>;
    /**
     * Force resource update through delete/recreate if needed.
     */
    forceUpdate?: pulumi.Input<boolean>;
    /**
     * Location of public keys used for verification. Used only if `verify` is true
     */
    keyring?: pulumi.Input<string>;
    /**
     * Run helm lint when planning.
     */
    lint?: pulumi.Input<boolean>;
    /**
     * The rendered manifests as JSON. Not yet supported.
     */
    manifest?: pulumi.Input<{[key: string]: any}>;
    /**
     * Limit the maximum number of revisions saved per release. Use 0 for no limit.
     */
    maxHistory?: pulumi.Input<number>;
    /**
     * Release name.
     */
    name?: pulumi.Input<string>;
    /**
     * Namespace to install the release into.
     */
    namespace?: pulumi.Input<string>;
    /**
     * Postrender command to run.
     */
    postrender?: pulumi.Input<string>;
    /**
     * Perform pods restart during upgrade/rollback.
     */
    recreatePods?: pulumi.Input<boolean>;
    /**
     * If set, render subchart notes along with the parent.
     */
    renderSubchartNotes?: pulumi.Input<boolean>;
    /**
     * Re-use the given name, even if that name is already used. This is unsafe in production
     */
    replace?: pulumi.Input<boolean>;
    /**
     * Specification defining the Helm chart repository to use.
     */
    repositoryOpts: pulumi.Input<inputs.helm.v3.RepositoryOpts>;
    /**
     * When upgrading, reset the values to the ones built into the chart.
     */
    resetValues?: pulumi.Input<boolean>;
    /**
     * Names of resources created by the release grouped by "kind/version".
     */
    resourceNames?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
    /**
     * When upgrading, reuse the last release's values and merge in any overrides. If 'resetValues' is specified, this is ignored
     */
    reuseValues?: pulumi.Input<boolean>;
    /**
     * By default, the provider waits until all resources are in a ready state before marking the release as successful. Setting this to true will skip such await logic.
     */
    skipAwait?: pulumi.Input<boolean>;
    /**
     * If set, no CRDs will be installed. By default, CRDs are installed if not already present.
     */
    skipCrds?: pulumi.Input<boolean>;
    /**
     * Time in seconds to wait for any individual kubernetes operation.
     */
    timeout?: pulumi.Input<number>;
    /**
     * List of assets (raw yaml files). Content is read and merged with values. Not yet supported.
     */
    valueYamlFiles?: pulumi.Input<pulumi.Input<pulumi.asset.Asset | pulumi.asset.Archive>[]>;
    /**
     * Custom values set for the release.
     */
    values: pulumi.Input<{[key: string]: any}>;
    /**
     * Verify the package before installing it.
     */
    verify?: pulumi.Input<boolean>;
    /**
     * Specify the exact chart version to install. If this is not specified, the latest version is installed.
     */
    version?: pulumi.Input<string>;
    /**
     * Will wait until all Jobs have been completed before marking the release as successful. This is ignored if `skipAwait` is enabled.
     */
    waitForJobs?: pulumi.Input<boolean>;
}