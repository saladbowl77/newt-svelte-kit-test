import { createClient } from 'newt-client-js';
import { env } from '$env/dynamic/private'
import fetchAdapter from "@vespaiach/axios-fetch-adapter";

export function load() {
    async function getdata() {
        const client = createClient({
            spaceUid: 'test-blog',
            token: env.TOKEN,
            apiType: 'cdn',
            adapter: fetchAdapter,
        });
    
        const res = await client.getContents({
            appUid: 'blog-content',
            modelUid: 'post',
            adapter: fetchAdapter,
            query: {
                order: "-uploadDate"
            }
        });
        console.log(res);
        return res;
    }

    return getdata();
}