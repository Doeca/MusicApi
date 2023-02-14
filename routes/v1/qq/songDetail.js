
const { qq_request } = require("../../../util/qq_request");


let songDetail = async (ctx) => {
    let getQueryFromUrl = (key, search) => {
        try {
            const sArr = search.split('?');
            let s = '';
            if (sArr.length > 1) {
                s = sArr[1];
            } else {
                return key ? undefined : {};
            }
            const querys = s.split('&');
            const result = {};
            querys.forEach((item) => {
                const temp = item.split('=');
                result[temp[0]] = decodeURIComponent(temp[1]);
            });
            return key ? result[key] : result;
        } catch (err) {
            // 除去search为空等异常
            return key ? '' : {};
        }
    }

    let changeUrlQuery = (obj, baseUrl) => {
        const query = getQueryFromUrl(null, baseUrl);
        let url = baseUrl.split('?')[0];

        const newQuery = { ...query, ...obj };
        let queryArr = [];
        Object.keys(newQuery).forEach((key) => {
            if (newQuery[key] !== undefined && newQuery[key] !== '') {
                queryArr.push(`${key}=${encodeURIComponent(newQuery[key])}`);
            }
        });
        return `${url}?${queryArr.join('&')}`.replace(/\?$/, '');
    }

    let url = 'http://u.y.qq.com/cgi-bin/musicu.fcg';
    let songmid = ctx.request.query.id.trim();
    let raw = ctx.request.query.raw;
    if (!songmid) {
        ctx.rest({
            result: 500,
            errMsg: 'songmid 不能为空',
        });
        return;
    }

    const data = {
        data: JSON.stringify({
            songinfo: {
                method: 'get_song_detail_yqq',
                module: 'music.pf_song_detail_svr',
                param: {
                    song_mid: songmid,
                },
            },
        }),
    };

    url = changeUrlQuery(data, url);
    console.log(url);
    const result = await qq_request(url);

    if (Number(raw)) {
        ctx.rest(result);
        return;
    }

    //console.log('1' ,result);

    ctx.rest({
        result: 100,
        data: result.data.songinfo.data,
    });


}

module.exports = {
    songDetail
};


