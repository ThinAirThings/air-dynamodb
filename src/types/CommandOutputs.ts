
export type ScanCommandOutput<T> = {
    Items?: T[]
};

export type QueryCommandOutput<T> = {
    Items?: T[]
};

export type GetCommandOutput<T> = {
    Item?: T
};

export type BatchGetCommandOutput<T> = {
    Responses?: Record<string, T[]>
};
export type PutCommandOutput = {
    Attributes?: Record<string, any>
};

export type UpdateCommandOutput = {
    Attributes?: Record<string, any>
};

export type DeleteCommandOutput = {
    Attributes?: Record<string, any>
};