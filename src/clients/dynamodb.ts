import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument  } from "@aws-sdk/lib-dynamodb";
import { BatchGetCommandOutput, DeleteCommandOutput, GetCommandOutput, PutCommandOutput, QueryCommandOutput, ScanCommandOutput, UpdateCommandOutput } from "../types/CommandOutputs";


const _dynamodb = () => {
    console.log("Running")
    return DynamoDBDocument.from(
        new DynamoDBClient({
            region: 'us-east-1'
        }),
    );
}


export const dynamodb = {
    scan: async <T extends Record<string, any>>(input: Parameters<ReturnType<typeof _dynamodb>['scan']>[0]): Promise<ScanCommandOutput<T>> => 
        _dynamodb().scan(input) as Promise<ScanCommandOutput<T>>,
    query: async <T extends Record<string, any>>(input: Parameters<ReturnType<typeof _dynamodb>['query']>[0]): Promise<QueryCommandOutput<T>> => 
        _dynamodb().query(input) as Promise<QueryCommandOutput<T>>,
    get: async <T extends Record<string, any>>(input: Parameters<ReturnType<typeof _dynamodb>['get']>[0]): Promise<GetCommandOutput<T>> =>
        _dynamodb().get(input) as Promise<GetCommandOutput<T>>,
    batchGet: async <T extends Record<string, any>>(input: Parameters<ReturnType<typeof _dynamodb>['batchGet']>[0]): Promise<BatchGetCommandOutput<T>> =>
        _dynamodb().batchGet(input) as Promise<BatchGetCommandOutput<T>>,
    put: async (input: Parameters<ReturnType<typeof _dynamodb>['put']>[0]): Promise<PutCommandOutput> =>
        _dynamodb().put(input) as Promise<PutCommandOutput>,
    update: async (input: Parameters<ReturnType<typeof _dynamodb>['update']>[0]): Promise<UpdateCommandOutput> =>
        _dynamodb().update(input) as Promise<UpdateCommandOutput>,
    delete: async (input: Parameters<ReturnType<typeof _dynamodb>['delete']>[0]): Promise<DeleteCommandOutput> =>
        _dynamodb().delete(input) as Promise<DeleteCommandOutput>,
}

