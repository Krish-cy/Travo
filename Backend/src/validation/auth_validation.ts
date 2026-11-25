import z from 'zod';

export const auth_validation=z.object({
    email:z.string(),
    password:z.string()
})

