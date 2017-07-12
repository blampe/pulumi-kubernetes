// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Application extends lumi.NamedResource implements ApplicationArgs {
    public readonly appSource?: { password?: string, revision?: string, sshKey?: string, type: string, url?: string, username?: string }[];
    public readonly autoBundleOnDeploy?: string;
    public readonly awsFlowRubySettings?: string;
    public readonly dataSourceArn?: string;
    public readonly dataSourceDatabaseName?: string;
    public readonly dataSourceType?: string;
    public readonly description?: string;
    public readonly documentRoot?: string;
    public readonly domains?: string[];
    public readonly enableSsl?: boolean;
    public readonly environment?: { key: string, secure?: boolean, value: string }[];
    public readonly _id?: string;
    public readonly _name: string;
    public readonly railsEnv?: string;
    public readonly shortName?: string;
    public readonly sslConfiguration?: { certificate: string, chain?: string, privateKey: string }[];
    public readonly stackId: string;
    public readonly type: string;

    constructor(name: string, args: ApplicationArgs) {
        super(name);
        this.appSource = args.appSource;
        this.autoBundleOnDeploy = args.autoBundleOnDeploy;
        this.awsFlowRubySettings = args.awsFlowRubySettings;
        this.dataSourceArn = args.dataSourceArn;
        this.dataSourceDatabaseName = args.dataSourceDatabaseName;
        this.dataSourceType = args.dataSourceType;
        this.description = args.description;
        this.documentRoot = args.documentRoot;
        this.domains = args.domains;
        this.enableSsl = args.enableSsl;
        this.environment = args.environment;
        this._id = args._id;
        this._name = args._name;
        this.railsEnv = args.railsEnv;
        this.shortName = args.shortName;
        this.sslConfiguration = args.sslConfiguration;
        this.stackId = args.stackId;
        this.type = args.type;
    }
}

export interface ApplicationArgs {
    readonly appSource?: { password?: string, revision?: string, sshKey?: string, type: string, url?: string, username?: string }[];
    readonly autoBundleOnDeploy?: string;
    readonly awsFlowRubySettings?: string;
    readonly dataSourceArn?: string;
    readonly dataSourceDatabaseName?: string;
    readonly dataSourceType?: string;
    readonly description?: string;
    readonly documentRoot?: string;
    readonly domains?: string[];
    readonly enableSsl?: boolean;
    readonly environment?: { key: string, secure?: boolean, value: string }[];
    readonly _id?: string;
    readonly _name: string;
    readonly railsEnv?: string;
    readonly shortName?: string;
    readonly sslConfiguration?: { certificate: string, chain?: string, privateKey: string }[];
    readonly stackId: string;
    readonly type: string;
}
