import moment from 'moment';

export function formatDateWithSpace(date) {
    let dateSplit = date.split(' ');
    return moment(dateSplit[0], "MM-DD-YYYY").format('MMM-YY');
}

export function formatPostgresDate(date) {
    return moment(date).format('MM/DD/YYYY');
}
