import qs from 'querystring'

class Lib {

    query() {
        return qs.parse(location.search.slice(1))
    }

    referrerQuery(referrer) {
        referrer = referrer || document.referrer
        if (!referrer) {
            return
        }
        const uri = new window.URL(referrer)
        return {
            uri,
            ...qs.parse(uri.search.slice(1))
        }
    }
}

export default new Lib
