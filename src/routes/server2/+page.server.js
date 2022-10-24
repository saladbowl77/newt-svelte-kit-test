import { createClient } from 'newt-client-js';
import { env } from '$env/dynamic/private'

export function load() {
    const num = 1+2+3+4;

    return num;
}