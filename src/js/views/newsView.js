import {elements} from './base';



// Limit the amount of words on content session
const limitContent = (content, limit = 300) => {
    if (content.length > limit) {
        let newContent = [];
        content.split(' ').reduce((acc, cur) => {
            if (acc + cur.length < limit) {
                newContent.push(cur);
            }
            return acc + cur.length;
        }, 0);
        return `${newContent.join(' ')}...`;
    }
    return content;
};

const displayNews = (el) => {
    const alt = el.Content.split(" ")[0].split("").splice(0,3).join("");
    let markup = `
        <div class="news_page">
            <div class="news">
                <div class="title">
                    <img src="/images/Logos/teams_logos/${el.Team}_logo.svg" alt=${alt}>
                    <h1>${el.Title}</h1>
                    <h4>${el.TimeAgo}</h4>
                </div>
                <div class="news__content">
                    <h1>
                        ${limitContent(el.Content)}<span class="link"><a href="${el.Url}" target="_blank">Read more</a></span>
                    </h1>
                </div>
            </div>
        </div>
    `;

    elements.teamPlayers.insertAdjacentHTML('afterbegin', markup);
};

export const renderNews = (newsData) => {
    newsData.forEach(displayNews);

};