import { defineCollection, z } from 'astro:content';
const argCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string())
    })
});

export const collections = {
    blog: argCollection,
};


