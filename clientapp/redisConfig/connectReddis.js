import { Redis } from '@upstash/redis'

process.exit(0)

const redis = new Redis({
  url: 'https://usw1-obliging-elf-33919.upstash.io',
  token: 'auth need Bro :) ',
})

const data = await redis.set('foo', 'bar');