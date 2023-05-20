export type AuthorizationSchema = {
    Authorization: string;
};

export const authHeader = (token: string): AuthorizationSchema => {
    return {
        Authorization: `bearer ${token || ''}`,
    };
};
