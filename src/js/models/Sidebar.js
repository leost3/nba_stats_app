import {teams} from '../teams';

export const nbaTeams =  class Team {
    constructor(conference) {
        this.conference = conference;
    }
    getTeams() {
        if (this.conference === 'all') {
            this.teams = teams.filter(el => el.Key !== 'EAST'&&el.Key !== 'WEST');
        } else {
            this.teams = teams.filter( el => {
                return el.Conference === this.conference;
            });
            this.teams.reverse();
        };
    }
}
