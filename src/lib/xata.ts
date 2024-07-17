// Generated by Xata Codegen 0.29.5. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "comedy_clubs",
    columns: [
      {
        name: "address",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
      },
      {
        name: "club_name",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
      },
      {
        name: "neighborhood",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: "'manhattan'::text",
      },
      {
        name: "self_managed",
        type: "bool",
        notNull: true,
        unique: false,
        defaultValue: "false",
      },
      {
        name: "slug",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
      },
      {
        name: "type",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: "'club'::text",
      },
      {
        name: "website",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
      },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type ComedyClubs = InferredTypes["comedy_clubs"];
export type ComedyClubsRecord = ComedyClubs & XataRecord;

export type DatabaseSchema = {
  comedy_clubs: ComedyClubsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://jaredalbright-s-workspace-iu66gn.us-east-1.xata.sh/db/venu"
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};