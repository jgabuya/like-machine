import _ from "lodash";
import moment from 'moment';

/**
 * Returns the timestart of "start of day" from a given date string
 * @param {string} dateString 
 */
export function getStartOfDayTimestamp(dateString) {
    return moment(dateString, moment.ISO_8601)
        .startOf("day")
        .unix();
}

/**
 * Sort links by like count (greatest first)
 * @param {array} links
 */
export function sortLinksByLikeCountDesc(links) {
    return _.clone(links).sort((a, b) => {
        return b.like_count - a.like_count;
    });
}

/**
 * Groups link items by day timestamp (newest first)
 * @param {array} links 
 */
export function groupLinksByDayTimestamp(links) {
    return links.reduce((arr, curr) => {
        const timestamp = getStartOfDayTimestamp(curr.created_at);

        // find array element that contains the current object's start of day timetamp value
        const obj = _.find(arr, item => item.timestamp === timestamp);

        if (obj) {
            // push curr inside the object's "links" array
            obj.links.push(curr);
        } else {
            // create new object and push curr
            arr.push({
                timestamp,
                links: [curr]
            })
        }

        return arr;
    }, []).sort((a, b) => b.timestamp - a.timestamp);
}