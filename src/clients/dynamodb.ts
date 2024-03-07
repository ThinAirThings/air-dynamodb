import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { QueryCommandOutput } from "../types/CommandOutputs";


const _dynamodb = DynamoDBDocument.from(
    new DynamoDBClient({}),
);

export const dynamodb = {
    scan: async <T extends Record<string, any>>(input: Parameters<typeof _dynamodb['scan']>[0]): Promise<QueryCommandOutput<T>> => 
        _dynamodb.scan(input) as Promise<QueryCommandOutput<T>>,
    query: async <T extends Record<string, any>>(input: Parameters<typeof _dynamodb['query']>[0]): Promise<QueryCommandOutput<T>> => 
        _dynamodb.query(input) as Promise<QueryCommandOutput<T>>,
    get: async <T extends Record<string, any>>(input: Parameters<typeof _dynamodb['get']>[0]): Promise<QueryCommandOutput<T>> =>
        _dynamodb.get(input) as Promise<QueryCommandOutput<T>>,
    put: async (input: Parameters<typeof _dynamodb['put']>[0]): Promise<QueryCommandOutput<Record<string, any>>> =>
        _dynamodb.put(input) as Promise<QueryCommandOutput<Record<string, any>>>,
    update: async (input: Parameters<typeof _dynamodb['update']>[0]): Promise<QueryCommandOutput<Record<string, any>>> =>
        _dynamodb.update(input) as Promise<QueryCommandOutput<Record<string, any>>>,
    delete: async (input: Parameters<typeof _dynamodb['delete']>[0]): Promise<QueryCommandOutput<Record<string, any>>> =>
        _dynamodb.delete(input) as Promise<QueryCommandOutput<Record<string, any>>>,
}

