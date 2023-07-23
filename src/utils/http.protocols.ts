import type { Response } from 'express';

class BaseResponse {
    constructor(res: Response, statusCode: number, message?: unknown) {
        res.status(statusCode).json(message);
    }
}

export class HttpStatusOk extends BaseResponse {
    constructor(res: Response, message?: object | object[] | null) {
        super(res, 200, message);
    }
}

export class HttpStatusNoContent extends BaseResponse {
    constructor(res: Response) {
        super(res, 204);
    }
}

export class HttpStatusCreated extends BaseResponse {
    constructor(res: Response, message?: string | object) {
        super(res, 201, message);
    }
}
