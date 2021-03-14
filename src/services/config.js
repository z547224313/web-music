const baseUrl_dev = 'http://123.207.32.32:9001/'
const baseUrl_pro = 'http://123.207.32.32:9001/'

const baseUrl = process.env.NODE_ENV === 'production' ? baseUrl_pro : baseUrl_dev
const timeout = 5000

export {
  baseUrl,
  timeout
}
