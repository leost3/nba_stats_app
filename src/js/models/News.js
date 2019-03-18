import axios from "axios";

export const news =  class{
    constructor(selectedTeam) {
        this.selectedTeam = selectedTeam;
        console.log(selectedTeam);
    }


    async getNews() {
        const res = await axios('https://api.fantasydata.net/v3/nba/stats/json/News?key=86a8a62f6d7c4969858b4744aec1763c');
        const data = res.data;
        console.log(data);
    }
}
