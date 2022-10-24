import { createClient } from 'newt-client-js';
import { env } from '$env/dynamic/private'

export function load() {
    async function getdata() {
        const client = createClient({
            spaceUid: 'test-blog',
            token: env.TOKEN,
            apiType: 'cdn'
        });
    
        const res = await client.getContents({
            appUid: 'blog-content',
            modelUid: 'post',
            query: {
                order: "-uploadDate"
            }
        });
        console.log(res);
        return res;
    }

    return getdata();
}