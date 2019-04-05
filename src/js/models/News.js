import axios from "axios";
import * as keys from '../config';

export const news =  class News{
    constructor() {}

    async getNews() {
        const res = await axios(`https://api.fantasydata.net/v3/nba/stats/json/News?key=${keys.key2}`);
        const data = res.data;
        this.newsData = data.reverse();
    }
}
