import lib from './lib'

class Source {

    query() {
        return lib.query()
    }

    referrerQuery(referrer) {
        return lib.referrerQuery(referrer)
    }

    get(field) {
        return this.query()[field]
    }

    getFrom() {
        return this.get('from')
    }

    getBaiduKeyword(referrer) {
        const refer = this.referrerQuery(referrer)
        if (refer.uri.hostname.includes('baidu.com')) {
            return refer.w || refer.wd || refer.word
        }
    }

    getSogouKeyword(referrer) {
        const refer = this.referrerQuery(referrer)
        if (refer.uri.hostname.includes('sogou.com')) {
            return refer.keyword || refer.query
        }
    }
}

export default new Source
